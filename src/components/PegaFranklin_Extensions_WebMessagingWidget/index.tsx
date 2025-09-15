import { useEffect } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';
import type { PConnFieldProps } from './PConnProps';
import './create-nonce';

import StyledPegaFranklinExtensionsWebMessagingWidgetWrapper from './styles';

interface PegaFranklinExtensionsWebMessagingWidgetProps extends PConnFieldProps {
    scriptSrc: string;
    scriptId?: string;
    async?: boolean;
    defer?: boolean;
    autoLoad?: boolean;
    dataAttrs?: string;
}

function PegaFranklinExtensionsWebMessagingWidget(props: PegaFranklinExtensionsWebMessagingWidgetProps) {
  const {
    scriptSrc,
    scriptId = 'pega-wm-chat',
    async = true,
    defer = true,
    autoLoad = true,
    dataAttrs
  } = props;

  useEffect(() => {
    if (!autoLoad) {
      return undefined;
    }

    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) {
      return undefined;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.src = scriptSrc;
    if (async) script.async = true;
    if (defer) script.defer = true;

    // Apply optional data-* attributes
    if (dataAttrs) {
      try {
        const parsed: Record<string, string> = JSON.parse(dataAttrs);
        Object.entries(parsed).forEach(([key, value]) => {
          if (key && typeof value !== 'undefined') {
            script.setAttribute(`data-${key}`, String(value));
          }
        });
      } catch (e) {
        // ignore JSON parse errors to avoid breaking portal
      }
    }

    document.head.appendChild(script);

    return () => {
      // Do not remove the script on unmount to prevent reload thrash
      // Optionally attempt cleanup if widget exposes a destroy API
      try {
        if ((window as any).PegaWM && typeof (window as any).PegaWM.destroy === 'function') {
          (window as any).PegaWM.destroy();
        }
      } catch {
        // ignore
      }
    };
  }, [autoLoad, defer, async, scriptId, scriptSrc, dataAttrs]);

  return (
    <StyledPegaFranklinExtensionsWebMessagingWidgetWrapper>
      <div id="wm-root" aria-label="Web Messaging widget" />
    </StyledPegaFranklinExtensionsWebMessagingWidgetWrapper>
  );
}

export default withConfiguration(PegaFranklinExtensionsWebMessagingWidget);
