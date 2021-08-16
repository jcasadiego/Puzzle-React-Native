import * as React from "react"
import { SvgUri } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: title */

export default function ImageSvg() {
  return (
    <SvgUri
      width={48}
      height={1}
      viewBox="0 0 48 1"
      uri="http://www.w3.org/2000/svg"
    >
    </SvgUri>
  )
};