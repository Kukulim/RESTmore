function youtube() {
    document.querySelector(
        ".video"
    ).innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/cSqZIdDZQqc?autoplay=1" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
document.onclick = toutube;