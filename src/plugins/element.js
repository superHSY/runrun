import Vue from 'vue'
//导入elements-ui的名称
import { Button, Form, FormItem, Input, Message,
	 	Container, Header, Aside,
	 	Main, Menu, Submenu, 
	 	 MenuItem, Breadcrumb, 
		BreadcrumbItem, Card,
		Row, Col, Table,
		TableColumn,Switch,
		Tooltip, Pagination,
		Dialog, MessageBox,
		Tag, Tree,Select, 
		Option,Cascader,
		Alert,Tabs, TabPane,
		Step,Steps,
		} from 'element-ui'

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use( Menu)
Vue.use( Submenu)
Vue.use( MenuItem)
Vue.use( BreadcrumbItem)
Vue.use( Breadcrumb)
Vue.use( Card)
Vue.use( Row)
Vue.use( Col)
Vue.use( Table)
Vue.use( TableColumn)
Vue.use( Switch)
Vue.use( Tooltip)
Vue.use( Pagination)
Vue.use( Dialog)
Vue.use( Tag)
Vue.use( Tree)
Vue.use( Select)
Vue.use( Option)
Vue.use( Cascader)
Vue.use( Alert)
Vue.use( Tabs)
Vue.use( TabPane)
Vue.use( Step)
Vue.use( Steps)
//全局使用
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

