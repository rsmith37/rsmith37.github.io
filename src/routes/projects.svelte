<script>
    import Project from "../components/Project.svelte";
</script>

<div class="root-container">
    <Project proj_name={"Project 1"}
        proj_desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        techs={["Javascript", "React"]}
        link={"https://github.com/rsmith37/AngularGoogleMaps"}
    />
    <hr />
    <Project proj_name={"Project 1"}
        proj_desc={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
        techs={["Javascript", "React", "MongoDB", "NodeJS"]}
        link={"https://github.com/rsmith37/AngularGoogleMaps"}
    /> 
</div>

<style>
    hr {
        width: 70%;
    }


</style>