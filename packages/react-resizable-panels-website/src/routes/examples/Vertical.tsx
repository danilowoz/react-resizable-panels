import { Panel, PanelGroup } from "react-resizable-panels";

import ResizeHandle from "../../components/ResizeHandle";

import Example from "./Example";
import styles from "./shared.module.css";

export default function VerticalRoute() {
  return (
    <Example
      code={CODE}
      exampleNode={<Content />}
      headerNode={
        <>
          <p>
            This example is a 2-row vertical <code>PanelGroup</code>.
            Click/touch the empty space between the panels and drag to resize.
            Arrow keys can also be used to resize panels.
          </p>
          <p>
            These panels use the <code>maxSize</code> property to prevent them
            from being resized larger than a maximal percentage of the overall
            group.
          </p>
        </>
      }
    />
  );
}

function Content() {
  return (
    <div className={styles.PanelGroupWrapper}>
      <PanelGroup className={styles.PanelGroup} direction="vertical">
        <Panel className={styles.PanelColumn} defaultSize={50} maxSize={75}>
          <div className={styles.Centered}>top</div>
        </Panel>
        <ResizeHandle className={styles.ResizeHandle} />
        <Panel className={styles.PanelColumn} maxSize={75}>
          <div className={styles.Centered}>bottom</div>
        </Panel>
      </PanelGroup>
    </div>
  );
}

const CODE = `
<PanelGroup direction="vertical">
  <Panel maxSize={75}>
    top
  </Panel>
  <ResizeHandle />
  <Panel maxSize={75}>
    bottom
  </Panel>
</PanelGroup>
`;
