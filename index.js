document.addEventListener('DOMContentLoaded', function () {
    const kotaContainer = document.getElementById('kota');

    function showKota(provinsiId) {
        const apiUrl = `https://api.goapi.io/regional/kota?provinsi_id=${provinsiId}&api_key=60c235d5-171a-5537-c7f7-4203a54d`;
