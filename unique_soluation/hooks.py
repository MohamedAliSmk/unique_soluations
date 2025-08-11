app_name = "unique_soluation"
app_title = "Unique Soluation"
app_publisher = "Unique Soluation"
app_description = "Unique Soluation"
app_email = "unique_soluation@gmail.com"
app_license = "mit"

app_logo_url = "/assets/unique_soluation/images/logo.png"

# include js, css files in header of desk.html
app_include_css = ["/assets/unique_soluation/css/global.css?v=1",
                   "/assets/unique_soluation/css/header.css?v=1",
                   "/assets/unique_soluation/css/sidebar.css?v=1",
                   "/assets/unique_soluation/css/homeBody.css?v=1",
                   "/assets/unique_soluation/css/workflow.css?v=1",
                   "/assets/unique_soluation/css/form.css?v=1",
                   "/assets/unique_soluation/css/desk-override.css?v=1"]
app_include_js = "unique_soluation.bundle.js"
page_js = {"card" : "public/js/cardjs"}
doctype_tree_js =  {
    	"Account": "public/js/account_tree.js",
}
# app_include_icons = "unique_soluation/icons/timeless/icons.svg"
after_install = "unique_soluation.install.after_install.after_install"
web_include_context = {
    "login": "login.get_context"
}

fixtures = [
    {"dt": "Report", "filters": [["module", "=", "Mo-Selim"]]},
    {"dt": "Custom Field", "filters": [["module", "=", "Mo-Selim"]]},
    {"dt": "Client Script", "filters": [["module", "=", "Mo-Selim"]]},
]

website_context = {
	"favicon": "/assets/unique_soluation/images/logo.png",
	"splash_image": "/assets/unique_soluation/images/logo.png",
}

# Apps
# ------------------

# required_apps = []

# Each item in the list will be shown as an app in the apps page
# add_to_apps_screen = [
# 	{
# 		"name": "unique_soluation",
# 		"logo": "/assets/unique_soluation/logo.png",
# 		"title": "Mo-Selim",
# 		"route": "/unique_soluation",
# 		"has_permission": "unique_soluation.api.permission.has_app_permission"
# 	}
# ]

# Includes in <head>
# ------------------

# include js, css files in header of desk.html
# app_include_css = "/assets/unique_soluation/css/unique_soluation.css"
# app_include_js = "/assets/unique_soluation/js/unique_soluation.js"

# include js, css files in header of web template
web_include_css = "/assets/unique_soluation/css/login.css"
# web_include_js = "/assets/unique_soluation/js/unique_soluation.js"

# include custom scss in every website theme (without file extension ".scss")
# website_theme_scss = "unique_soluation/public/scss/website"

# include js, css files in header of web form
# webform_include_js = {"doctype": "public/js/doctype.js"}
# webform_include_css = {"doctype": "public/css/doctype.css"}

# include js in page
# page_js = {"page" : "public/js/file.js"}

# include js in doctype views
# doctype_js = {"doctype" : "public/js/doctype.js"}
# doctype_list_js = {"doctype" : "public/js/doctype_list.js"}
# doctype_tree_js = {"doctype" : "public/js/doctype_tree.js"}
# doctype_calendar_js = {"doctype" : "public/js/doctype_calendar.js"}

# Svg Icons
# ------------------
# include app icons in desk
# app_include_icons = "unique_soluation/public/icons.svg"

# Home Pages
# ----------

# application home page (will override Website Settings)
home_page = "home"

# website user home page (by Role)
# role_home_page = {
# 	"Role": "home_page"
# }

# Generators
# ----------

# automatically create page for each record of this doctype
# website_generators = ["Web Page"]

# Jinja
# ----------

# add methods and filters to jinja environment
# jinja = {
# 	"methods": "unique_soluation.utils.jinja_methods",
# 	"filters": "unique_soluation.utils.jinja_filters"
# }

# Installation
# ------------

# before_install = "unique_soluation.install.before_install"
# after_install = "unique_soluation.install.after_install"

# Uninstallation
# ------------

# before_uninstall = "unique_soluation.uninstall.before_uninstall"
# after_uninstall = "unique_soluation.uninstall.after_uninstall"

# Integration Setup
# ------------------
# To set up dependencies/integrations with other apps
# Name of the app being installed is passed as an argument

# before_app_install = "unique_soluation.utils.before_app_install"
# after_app_install = "unique_soluation.utils.after_app_install"

# Integration Cleanup
# -------------------
# To clean up dependencies/integrations with other apps
# Name of the app being uninstalled is passed as an argument

# before_app_uninstall = "unique_soluation.utils.before_app_uninstall"
# after_app_uninstall = "unique_soluation.utils.after_app_uninstall"

# Desk Notifications
# ------------------
# See frappe.core.notifications.get_notification_config

# notification_config = "unique_soluation.notifications.get_notification_config"

# Permissions
# -----------
# Permissions evaluated in scripted ways

# permission_query_conditions = {
# 	"Event": "frappe.desk.doctype.event.event.get_permission_query_conditions",
# }
#
# has_permission = {
# 	"Event": "frappe.desk.doctype.event.event.has_permission",
# }

# DocType Class
# ---------------
# Override standard doctype classes

# override_doctype_class = {
# 	"ToDo": "custom_app.overrides.CustomToDo"
# }

# Document Events
# ---------------
# Hook on document methods and events

# doc_events = {
# }
# override_doctype_class = {
#     "Employee Advance": "unique_soluation.unique_soluation.overrides.employee_advance.CustomEmployeeAdvance"
# }
# Scheduled Tasks
# ---------------

# scheduler_events = {
# 	"all": [
# 		"unique_soluation.tasks.all"
# 	],
# 	"daily": [
# 		"unique_soluation.tasks.daily"
# 	],
# 	"hourly": [
# 		"unique_soluation.tasks.hourly"
# 	],
# 	"weekly": [
# 		"unique_soluation.tasks.weekly"
# 	],
# 	"monthly": [
# 		"unique_soluation.tasks.monthly"
# 	],
# }

# Testing
# -------

# before_tests = "unique_soluation.install.before_tests"

# Overriding Methods
# ------------------------------
#
# override_whitelisted_methods = {
	
# }
#
# each overriding function accepts a `data` argument;
# generated from the base implementation of the doctype dashboard,
# along with any modifications made in other Frappe apps
# override_doctype_dashboards = {
# 	"Task": "unique_soluation.task.get_dashboard_data"
# }

# exempt linked doctypes from being automatically cancelled
#
# auto_cancel_exempted_doctypes = ["Auto Repeat"]

# Ignore links to specified DocTypes when deleting documents
# -----------------------------------------------------------

# ignore_links_on_delete = ["Communication", "ToDo"]

# Request Events
# ----------------
# before_request = ["unique_soluation.utils.before_request"]
# after_request = ["unique_soluation.utils.after_request"]

# Job Events
# ----------
# before_job = ["unique_soluation.utils.before_job"]
# after_job = ["unique_soluation.utils.after_job"]

# User Data Protection
# --------------------

# user_data_fields = [
# 	{
# 		"doctype": "{doctype_1}",
# 		"filter_by": "{filter_by}",
# 		"redact_fields": ["{field_1}", "{field_2}"],
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_2}",
# 		"filter_by": "{filter_by}",
# 		"partial": 1,
# 	},
# 	{
# 		"doctype": "{doctype_3}",
# 		"strict": False,
# 	},
# 	{
# 		"doctype": "{doctype_4}"
# 	}
# ]

# Authentication and authorization
# --------------------------------

# auth_hooks = [
# 	"unique_soluation.auth.validate"
# ]

# Automatically update python controller files with type annotations for this app.
# export_python_type_annotations = True

# default_log_clearing_doctypes = {
# 	"Logging DocType Name": 30  # days to retain logs
# }
