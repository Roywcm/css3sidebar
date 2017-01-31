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

##SASS
When you work with SASS you can edit the breakpoints. 
@import src/sass/css3sidebar.scss in your project and prepend:

```
$sidebarbreakpoint: 768px; // your breakpoint
```

##Work on desktop screens
By default the sidebar will work on mobile and desktop. If you want to exclude the functionality on desktop. add the following to your sidebar wrapper:

```
	<div class="css3sidebar css3sidebar-lg sidebar-left" id="primary-sidebar"></div>
```

