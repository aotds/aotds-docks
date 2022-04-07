<Moveable
  {target}
  originDraggable={true}
  originRelative={true}
  draggable={true}
  throttleDrag={0}
  zoom={1}
  origin={false}
  padding={{ left: 0, top: 0, right: 0, bottom: 0 }}
  on:dragOriginStart={({ detail: e }) => {
    e.dragStart && e.dragStart.set(frame.translate);
  }}
  on:dragOrigin={({ detail: e }) => {
    frame.translate = e.drag.beforeTranslate;
    frame.transformOrigin = e.transformOrigin;
  }}
  on:dragStart={({ detail: e }) => {
    e.set(frame.translate);
  }}
  on:drag={({ detail: e }) => {
    frame.translate = e.beforeTranslate;
  }}
  on:render={({ detail: e }) => {
    const { translate, rotate, transformOrigin } = frame;
    e.target.style.transformOrigin = transformOrigin;
    e.target.style.transform =
      `translate(${translate[0]}px, ${translate[1]}px)` +
      ` rotate(${rotate}deg)`;
  }}
/>

<script>
  import Moveable from "svelte-moveable";

  export let target;

  let frame = {
    translate: [0, 0],
    rotate: 0,
    transformOrigin: "50% 50%",
  };
</script>
