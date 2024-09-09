# Hugo Bootstrap SCSS template
This is a Hugo project template that implements the bare minimum for integrating Bootstrap (v5.3) with custom SCSS using the [hugo-mod-bootstrap-scss](https://github.com/gohugoio/hugo-mod-bootstrap-scss) module.

Using your own SCSS and integrating bootstrap in this way makes it possible to customize bootstrap.
See the bootstrap documentation for all customization options: [getbootstrap.com](https://getbootstrap.com/docs/5.3/customize/sass/)

## Requirements
- `go` must be installed to use the bootstrap module (and other hugo modules too!)
- In order for the SCSS files to be compiled, the extended version of Hugo must be installed

## Installation
Clone the repository and cd into the directory:
```
git clone https://github.com/fluxxcode/hugo-bootstrap-template.git
cd hugo-bootstrap-template
```
You can now start the Hugo server ...
```
hugo server
```
... and open http://localhost:1313/ inside your browser. On the website you should now see a very simple home page with colored bootstrap buttons.

If everything worked, you can now customize the website and get started with your project!

## Configuration
Importing and customizing bootstrap takes place inside the file `assets/scss/style.scss`. \
By default, **only the bare minimum of bootstrap is imported**. \
If other components are required (e.g. NavBar, Accordions, Grid, etc.), they must be imported manually. \
Alternatively, you can use `@import “bootstrap/bootstrap”` to import entire bootstrap at once. However, this means that customization is lost.

## Credits
Most of the important work was done by the [hugo-mod-bootstrap-scss](https://github.com/gohugoio/hugo-mod-bootstrap-scss) module. \
This repository only serves as a project template that sets up the bare minimum and integrates the module to enable bootstrap and custom scss.
