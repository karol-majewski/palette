import { storiesOf } from "@storybook/react"
import React from "react"
import { HTML } from "./HTML"

const HTML_EXAMPLE = `
<h1>H1 Headline</h1>

<h2>H2 Headline</h2>

<h3>H3 Headline</h3>

<h4>H4 Headline</h4>

<p>I’m of the opinion that they use no inert material. All their equipment and instruments are alive, in some form or other.</p>

<p>They don’t construct or build at all. The idea of making is foreign to them. They utilize existing forms. Even their ships—</p>

<ol>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ol>

<ul>
  <li>first</li>
  <li>second</li>
  <li>third</li>
</ul>
`

storiesOf("Components/HTML", module).add("HTML", () => {
  return (
    <>
      <HTML style={{ border: "1px dotted" }} size="6" html={HTML_EXAMPLE} />
      <HTML style={{ border: "1px dotted" }} size="4" html={HTML_EXAMPLE} />
      <HTML style={{ border: "1px dotted" }} size="1" html={HTML_EXAMPLE} />
    </>
  )
})
