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
