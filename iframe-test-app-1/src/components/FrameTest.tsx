import { useEffect, useRef, useState } from "react"
import "./FrameTest.css"

export default function FrameTest(){
  const [url, setUrl] = useState("http://localhost/grafana/");
  const [currentUrl, setCurrentUrl] = useState("N/A")
  const ref = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  useEffect(() => {
    const { offsetWidth, offsetHeight } = ref.current;
    setWidth(offsetWidth);
    setHeight(offsetHeight);
  }, []);
  // useEffect(()=> {
  //   setCurrentUrl(document.getElementById("iframe-test")?.contentWindow.location.href)
  // }, [])
  return (
    <>
    <p>{width} x {height}</p>
    <p>Loading Grafana from <a href={url} target="_blank" rel="noreferrer noopener">{url}</a></p>
    <p>Current URL: {currentUrl}</p>
    <div ref={ref} className="iframe-frame">
      <iframe src={url} width={600} height={600} id="iframe-test"/>
    </div>
  </>
  )
}