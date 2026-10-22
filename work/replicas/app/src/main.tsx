import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CadenceBentoL from './CadenceBentoL'
import CadenceHeroD from './CadenceHeroD'
import CadenceProductB from './CadenceProductB'
import XFrame from './XFrame'
import PreflightNegative from './PreflightNegative'
import PanelryProduct from './PanelryProduct'

// Public package: our own fictional brands only. Tempra: #/h4a hero, #/cprodb product, #/cbentol dark bento;
// Panelry: #/panelry product; #/pfneg is the preflight's negative control (never ship it).
const ROUTES: Record<string, () => React.JSX.Element> = { '#/cbentol': CadenceBentoL, '#/h4a': CadenceHeroD, '#/cprodb': CadenceProductB, '#/pfneg': PreflightNegative, '#/panelry': PanelryProduct }
// #/xframe?src=<route>&x=&y= : an X-post crop of any route (XFrame.tsx, tools/library.mjs)
const [hashKey, query = ''] = location.hash.split('?')
const View = hashKey === '#/xframe' ? () => <XFrame routes={ROUTES} q={new URLSearchParams(query)} /> : ROUTES[hashKey] ?? CadenceHeroD
createRoot(document.getElementById('root')!).render(<StrictMode><View /></StrictMode>)
