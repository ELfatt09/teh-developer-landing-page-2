import React from "react";

import ProfilePortofolio from "../sections/ProfilePortofolio";
import ProjectPortofolio from "../sections/ProjectPortofolio";
import PortofolioFooter from "../sections/FooterPortofolio";

export default function Portofolio({id}) {
    return (
        <>
          <ProfilePortofolio />
          <ProjectPortofolio />
          <PortofolioFooter />
        </>
    );
};