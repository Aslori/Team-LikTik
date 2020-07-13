$(document).ready(function () {
    $(".menu-toggle").click(function () {
        $("#nav-wrapper, .darkshadow").toggleClass("open")
    });
    $(".darkshadow").click(function () {
        $("#nav-wrapper,.darkshadow").removeClass("open")
    });
    var d = function (a, b) {
        this.el = a || {};
        this.multiple = b || false;
        var c = this.el.find(".nav-submenu");
        c.on("click", {
            el: this.el,
            multiple: this.multiple
        }, this.dropdown)
    };
    d.prototype.dropdown = function (a) {
        var b = a.data.el;
        $this = $(this), $next = $this.next();
        $next.slideToggle();
        $this.parent().toggleClass("open");
        if (!a.data.multiple) {
            b.find(".nav-sub").not($next).slideUp().parent().removeClass("open")
        }
    };
    var e = new d($("#nav-wrapper"), false)
})
