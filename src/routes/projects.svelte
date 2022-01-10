<script>
    import Project from "../components/Project.svelte";
</script>

<div class="root-container">
    <Project 
        proj_name={"MeetMeInTheMiddle"}
        proj_desc={"As part of my Software Development Projects course, created a Android and iPhone mobile application using the React Native along with teammate Alex Abraham. The application leverages the GoogleMapsAPI, including Location and Places services, to determine an equidistant point between two addresses and return points of interest for the users."}
        techs={["React Native", "Javascript", "Google Maps API", "Android/iOS Emulation"]}
        image={'./MeetMeInTheMiddle.png'}
        demo_link={"https://www.youtube.com/watch?v=nFGA5kceqFE&t=8s"}
    /> 
    <hr />
    <Project 
        proj_name={"Digital Mapping Project"}
        proj_desc={"Collaborated with Software Development Technology I team to develop an interactive mapping application using the Angular framework following the Waterfall and Agile methodologies. Demonstrated application for client and public at CREATE Symposium, April 2019."}
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