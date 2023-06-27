import './App.css'
import { Button, ButtonProps } from './components/button'

interface DisplayButtonProps extends ButtonProps {
  text: string
}

function DiplayButton(props: DisplayButtonProps) {
  return (
    <div>
      <h2 className="h2 font-poppins">{props.text}</h2>
      <Button {...props}>Default</Button>
    </div>
  )
}

function App() {
  const buttonExamples: Array<DisplayButtonProps | null> = [
    { text: '<Button />' },
    { text: '&:hover, &:focus', manualFocus: true },
    null,
    null,
    { text: '<Button variant=”outline” />', variant: "outline", color: "primary" },
    { text: '&:hover, &:focus', variant: "outline", color: "primary", manualFocus: true },
    null,
    null,
    { text: "<Button variant=”text” />", variant: "text", color: "primary" },
    { text: "&:hover, &:focus", variant: "text", color: "primary", manualFocus: true },
    null,
    null,
    { text: "<Button disableShadow />", variant: "fill", disableShadow: true, color: "primary" },
    null,
    null,
    null,
    { text: "<Button disabled />", disabled: true },
    { text: "<Button variant=”text” disabled />", disabled: true, variant: "text" },
    null,
    null,
    { text: "<Button startIcon=”local_grocery_store” />", startIcon: "local_grocery_store", color: "primary" },
    { text: "<Button endIcon=”local_grocery_store” />", endIcon: "local_grocery_store", color: "primary" },
    null,
    null,
    { text: "<Button size=”sm” />", size: "sm", color: "primary" },
    { text: "<Button size=”md” />", size: "md", color: "primary" },
    { text: "<Button size=”lg” />", size: "lg", color: "primary" },
    null,
    { text: "<Button color=”default” />", color: "default" },
    { text: "<Button color=”primary” />", color: "primary" },
    { text: "<Button color=”secondary” />", color: "secondary" },
    { text: "<Button color=”danger” />", color: "danger" },
    { text: "&:hover, &:focus", color: "default", manualFocus: true },
    { text: "&:hover, &:focus", color: "primary", manualFocus: true },
    { text: "&:hover, &:focus", color: "secondary", manualFocus: true },
    { text: "&:hover, &:focus", color: "danger", manualFocus: true },
  ]

  return (
    <>
      <header className="title-div">
        <div className="title-box font-poppins">
          <a href="https://devchallenges.io">
            <p className="title-box_text">
              <span className="title-box_span">Dev</span>challenges.io
            </p>
          </a>
          <span className="title-box_text">+</span>
          <a href="https://github.com/fvcoder">
            <p className="title-box_text"><span className="title-box_span">fv</span>coder</p>
          </a>
        </div>
        <h1 className="h1 font-poppins">Button component</h1>
      </header>
      <main className="grid">
        {buttonExamples.map((x, i) => x !== null ? <DiplayButton key={i} {...x} /> : <div />)}
      </main>
    </>
  )
}

export default App
