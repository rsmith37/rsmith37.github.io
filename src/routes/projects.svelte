<script>
    import Project from "../components/Project.svelte";
</script>

<div class="root-container">
    <Project 
        proj_name={"AngularGoogleMaps"}
        proj_desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        techs={["Javascript", "React"]}
        github_link={"https://github.com/rsmith37/AngularGoogleMaps"}
        image={'./AngularMaps.png'}
        demo_link={"https://ggcmaps.wpengine.com/interactive-digital-mapping-in-itec-3860/"}
    />
    <hr />
    <Project 
        proj_name={"Project 1"}
        proj_desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        techs={["Javascript", "React", "MongoDB", "NodeJS"]}
        github_link={"https://github.com/rsmith37/AngularGoogleMaps"}
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