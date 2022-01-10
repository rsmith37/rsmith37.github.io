<script>
    import Project from "../components/Project.svelte";

</script>

<div class="root-container">
    <Project 
        proj_name={"MeetMeInTheMiddle"}
        proj_desc={"Created an Android and iPhone mobile application using the React Native along with teammate Alex Abraham as part of my Software Development Projects course. The application leverages the GoogleMapsAPI, including Location and Places services, to determine an equidistant point between two addresses and return points of interest for the users, displayed in a list."}
        techs={["React Native", "Javascript", "Google Maps API", "Android/iOS Emulation"]}
        image={'./MeetMeInTheMiddle.png'}
        demo_link={"https://www.youtube.com/watch?v=nFGA5kceqFE&t=8s"}
    /> 
    <hr />
    <Project 
        proj_name={"Shutter Plug"}
        proj_desc={"As a member of a team for Software Development II, worked with external client to design and develop a business focused CRUD web application following the Agile methodology. Shutter Plug's goal was to show off local photographers portfolios and skills, offering profile creation and search, with the intention of connecting them with potential customers."}
        github_link={"https://github.com/rsmith37/ShutterPlugClone"}
        techs={["ReactJS", "Redux", "NodeJs/Express", "MongoDB", "HTML", "BootstrapCSS", "Heroku"]}
        image={'./ShutterPlug.png'}
        demo_link={"https://www.youtube.com/watch?v=BXEuS-EflOk&feature=youtu.be"}
    /> 
    <hr />
    <Project
        proj_name={"GGC Study"}
        proj_desc={"Worked independently as part of Information Technology Research course to create GGC Study, a reactive CRUD web application that allows students to schedule and view study group meetings. Built using the MERN stack, along with Redux for state management and deployed into production using Heroku."}
        github_link={"https://github.com/rsmith37/GGCStudy"}
        techs={["ReactJS", "Redux", "NodeJs/Express", "MongoDB", "HTML", "BootstrapCSS", "Heroku"]}
        image={'./GGCStudy.png'}
    />
    <hr />
    <Project
        proj_name={"AR Chem: Shared Augmented Reality (AR) Experience of 3D Molecules for Chemistry Students"}
        proj_desc={"As an undergraduate research assistant, worked with team to pair Augmented Reality (AR) and Machine Learning (ML) in an AR molecule viewing mobile app. Utilized a combination of Unity 3D, Google ARCore and Google Firebase to create the integrated learning experience. Culminated in abstract and poster presentation: Georgia Gwinnett College School of Science and Technology STaRS, April 2019. (1st Place Poster Contest) & Consortium for Computer Sciences in Colleges Central Plains Conference, April 2019 (2nd Place Research Contest)"}
        techs={["C#", "Unity 3D", "Google AR Core", "Google Firebase"]}
        image={'./ARChem.png'}
        demo_link={'https://rsmith37.github.io/ARChem.png'}
    />
    <hr />
    <Project 
        proj_name={"Digital Mapping Project"}
        proj_desc={"Collaborated with Software Development I team to develop an interactive mapping application using the Angular framework following the Waterfall and Agile methodologies. Utlized Google Maps API to display static location markers that would display information when selected by user."}
        techs={["Angular", "TypeScript", "HTML", "CSS", "Google Maps API", "Java"]}
        github_link={"https://github.com/rsmith37/AngularGoogleMaps"}
        image={'./AngularMaps.png'}
        demo_link={"https://ggcmaps.wpengine.com/interactive-digital-mapping-in-itec-3860/"}
    />
</div>

<style>

    .root-container {
        padding-top: 10px;
        padding-bottom: 10px;
    }

    hr {
        width: 70%;
    }


</style>