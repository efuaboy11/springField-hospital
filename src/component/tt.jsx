<div  style={{ width: "50%"}}>
<CircularProgressbar
  value={20}
  text={`~20%`}
  strokeWidth={5} // Increase or decrease thickness
  styles={{
    path: {
      stroke: `rgba(27, 9, 111, ${percentage / 100})`,
      strokeLinecap: "round",
      transition: "stroke-dashoffset 0.5s ease 0s",
      
      transformOrigin: "center center",
    },
    trail: {
      stroke: "#d6d6d6",
      strokeLinecap: "round",
      transform: "rotate(0.25turn)",
      transformOrigin: "center center",
    },
    text: {
      fill: "#1b096f",
      fontSize: "16px",
      fontWeight: '700'
    },
    background: {
      fill: "#3e98c7",
    },
  }}
/>
</div>