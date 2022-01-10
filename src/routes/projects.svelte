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
        proj_name={"Digital Mapping Project"}
        proj_desc={"Collaborated with Software Development Technology I team to develop an interactive mapping application using the Angular framework following the Waterfall and Agile methodologies. Utlized Google Maps API to display static location markers that would display information when selected by user."}
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