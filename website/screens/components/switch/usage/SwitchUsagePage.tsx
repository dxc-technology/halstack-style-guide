import {
  DxcText,
  DxcList,
  DxcStack,
  DxcTable,
} from "@dxc-technology/halstack-react";
import Image from "next/image";
import HeadingLink from "../../../common/HeadingLink";
import statesImage from "./images/switch_states.png";
import anatomyImage from "./images/switch_anatomy.png";
import stackingImage from "./images/switch_stacking.png";
import positionImage from "./images/switch_label_position.png";
import Figure from "../../../common/Figure";
import DocFooter from "../../../common/DocFooter";

const SwitchUsagePage = () => {
  return (
    <DxcStack gutter="xxxlarge">
      <DxcStack gutter="large">
        <HeadingLink level={2}>Usage</HeadingLink>
        <DxcList>
          <DxcText>
            Switch toggles should be used in place of radio buttons whenever the
            options are opposites of each other (i.e. yes/no, on/off, etc).
          </DxcText>
          <DxcText>
            Whenever is possible stack the switch component vertically.
          </DxcText>
          <DxcText>
            Switches have immediate effect over the application, changing
            preferences and configuration settings. Don't use a submit button.
          </DxcText>
        </DxcList>
        <HeadingLink level={2}>States</HeadingLink>
        <DxcText as="p">
          Five different states are defined in the life cycle of the component:{" "}
          <strong>unselected enabled</strong>, <strong>unselected focus</strong>
          , <strong>unselected disabled</strong>,{" "}
          <strong>selected enabled</strong>, <strong>selected focus</strong> and{" "}
          <strong>selected disabled</strong>.
        </DxcText>
        <Figure caption="Switch component states">
          <Image src={statesImage} alt="Switch component states" />
        </Figure>
        <HeadingLink level={2}>Anatomy</HeadingLink>
        <Figure caption="Switch component anatomy">
          <Image src={anatomyImage} alt="Switch component anatomy" />
        </Figure>
        <DxcList type="number">
          <DxcText>Label</DxcText>
          <DxcText>Thumb</DxcText>
          <DxcText>Track</DxcText>
        </DxcList>
        <HeadingLink level={2}>Stacking</HeadingLink>
        <Figure caption="Switch stacking options">
          <Image src={stackingImage} alt="Switch stacking options" />
        </Figure>
        <DxcText as="p">
          In some application the use of several switches based on the
          requirements could appear, that why we provide some indications in the
          case that the user needs to use stacked switches.
        </DxcText>
        <HeadingLink level={2}>Label position</HeadingLink>
        <Figure caption="Switch label position options example">
          <Image
            src={positionImage}
            alt="Switch label position options example"
          />
        </Figure>
        <DxcTable>
          <thead>
            <tr>
              <th>Position</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <strong>Label before</strong>
              </td>
              <td>Labels before the switch indicate what the switch is for</td>
            </tr>
            <tr>
              <td>
                <strong>Label after</strong>
              </td>
              <td>Labels after the switch indicate the state of the switch</td>
            </tr>
          </tbody>
        </DxcTable>
      </DxcStack>
      <DocFooter githubLink="https://github.com/dxc-technology/halstack-style-guide/blob/master/website/screens/components/switch/usage/SwitchUsagePage.tsx" />
    </DxcStack>
  );
};

export default SwitchUsagePage;
