var NavbarItem = {
  template: `<h1>{{msg}}</h1>`,
  props: ['msg']
}

var Navbar = {
  template: `<div class="navbar"><navbar-item msg="navItem"></navbar-item></div>`,
  components: {
    NavbarItem
  }
}