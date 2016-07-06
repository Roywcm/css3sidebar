# css3sidebar
Simple css3 sidebar 

## Step 1: 
include dist/jquery.css3sidebar.js and css/css3sidebar.css in your html. 

## step 2: 
add a trigger button:

```
<button type="button" class="navbar-toggle collapsed" data-toggle="css3sidebar" data-target="#primary-sidebar" aria-expanded="false">Trigger</button>
```

##Step 3: 
Add the sidebar html:

```
<div class="css3sidebar sidebar-left" id="primary-sidebar">
		<div class="menu-wrapper">
		{{ your custom html }}
		</div>
</div>
```

##Step 4: 
Style your sidebar and add custom html code!


##Methods
```
$(element).css3sidebar('openSidemenu');
$(element).css3sidebar('closeSidemenu');
$(element).css3sidebar('toggleSidemenu');
```

##Bootstrap LESS
If you want to work with the bootstrap grid, import the bootstrap less file into your less project
```
src/css3sidebar-bootstrap.less
```

##Work on desktop screens
By default, this sidebar plugin works only on small screens. To work with this plugin on large screens, add the large css or less: 
```
src/css3sidebar-lg.less
```
or 
```
css/css3sidebar-lg.css
```

