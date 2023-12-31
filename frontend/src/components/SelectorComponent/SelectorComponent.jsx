/* eslint-disable react/prop-types */
import Certificate_01 from "../Certificate/Certificate_01";
import Certificate_02 from "../Certificate/Certificate_02";
import Certificate_06 from "../Certificate/Certificate_06";
import Certificate_07 from "../Certificate/Certificate_07";
import Certificate_13 from "../Certificate/Certificate_13";
import Certificate_14 from "../Certificate/Certificate_14";
import Certificate_15 from "../Certificate/Certificate_15";

const models = [
  {
    id: "64bc6c4e3aa37605d20cc1a7",
    name: "template1",
    component: certificate => <Certificate_01 {...certificate} />
  },
  {
    id: "64bc6c803aa37605d20cc1a9",
    name: "template2",
    component: certificate => <Certificate_02 {...certificate} />
  },
  {
    id: "64bc6cef3aa37605d20cc1b1",
    name: "template06",
    component: certificate => <Certificate_06 {...certificate} />
  },
  {
    id: "64bc6d0c3aa37605d20cc1b3",
    name: "template07",
    component: certificate => <Certificate_07 {...certificate} />
  },

  {
    id: "64bc6db53aa37605d20cc1bf",
    name: "template13",
    component: certificate => <Certificate_13 {...certificate} />
  },
  {
    id: "64bc6dd63aa37605d20cc1c1",
    name: "template14",
    component: certificate => <Certificate_14 {...certificate} />
  },
  {
    id: "64bc6df83aa37605d20cc1c3",
    name: "template15",
    component: certificate => <Certificate_15 {...certificate} />
  }
];

const SelectorComponent = ({ certificate, templateSelected, imgLogo }) => {
  const componentSelected = (certificate, templateSelected, imgLogo) => {
    const component = models.find(model => model.id === templateSelected._id);
    if (component) {
      return component.component({ ...certificate, templateSelected, imgLogo });
    }
    return models[0].component({ ...certificate, templateSelected, imgLogo });
  };

  return <>{componentSelected(certificate, templateSelected, imgLogo)}</>;
};

export default SelectorComponent;
