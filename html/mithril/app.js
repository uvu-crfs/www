var count = 0;

var Home = {
    view: function() {
        return m("a", {href: "#!/hello"}, "Enter!");
    }
};

var Hello = {
    view: function() {
        return m("main", [
            m("h1", {class: "title"}, "My first app"),
            m("button", {onclick: function() {count++;}}, count + " clicks"),
        ]);
    }
};

m.route(document.body.querySelector("#app"), "/home", {
    "/home": Home,
    "/hello": Hello,
});

console.log("Username in mithril", username);
