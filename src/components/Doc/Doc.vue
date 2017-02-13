<script>
  import { mapGetters } from 'vuex';
  import Layout from '../DocComponents/Layout';
  import Button from '../DocComponents/Button';
  import DropDown from '../DocComponents/DropDown';
  import ButtonGroup from '../DocComponents/ButtonGroup';
  import Switch from '../DocComponents/Switch';
  import Pageination from '../DocComponents/Pageination';
  import BreadCrumb from '../DocComponents/BreadCrumb';
  import Nav from '../DocComponents/Nav';
  import Menu from '../DocComponents/Menu';
  import Tabs from '../DocComponents/Tabs';
  import Input from '../DocComponents/Input';
  import DatePicker from '../DocComponents/DatePicker';
  import CheckBox from '../DocComponents/CheckBox';
  import Select from '../DocComponents/Select';
  import Cascader from '../DocComponents/Cascader';
  import Dialog from '../DocComponents/Dialog';
  import Notification from '../DocComponents/Notification';
  import Message from '../DocComponents/Message';
  import Alert from '../DocComponents/Alert';
  import BackTop from '../DocComponents/BackTop';
  import Progress from '../DocComponents/Progress';
  import Tree from '../DocComponents/Tree';
  import Table from '../DocComponents/Table';


  export default {
    name: 'Doc',
    components: {
      'doc-Layout': Layout,
      'doc-Button': Button,
      'doc-DropDown': DropDown,
      'doc-ButtonGroup': ButtonGroup,
      'doc-Switch': Switch,
      'doc-Pageination': Pageination,
      'doc-BreadCrumb': BreadCrumb,
      'doc-Nav': Nav,
      'doc-Menu': Menu,
      'doc-Tabs': Tabs,
      'doc-Input': Input,
      'doc-DatePicker': DatePicker,
      'doc-CheckBox': CheckBox,
      'doc-Select': Select,
      'doc-Cascader': Cascader,
      'doc-Dialog': Dialog,
      'doc-Notification': Notification,
      'doc-Message': Message,
      'doc-Alert': Alert,
      'doc-BackTop': BackTop,
      'doc-Progress': Progress,
      'doc-Tree': Tree,
      'doc-Table': Table
    },
    computed: {
      ...mapGetters({
        currentComponent: 'getCurrentComponent'
      })
    },
    render(h) {
      let output;
      switch (this.currentComponent) {
        case 'Layout':
          output = [<doc-Layout />];
          break;
        case 'Button':
          output = [<doc-Button />];
          break;
        case 'DropDown':
          output = [<doc-DropDown />]
          break;
        case 'ButtonGroup':
          output = [<doc-ButtonGroup />]
          break;
        case 'Switch':
          output = [<doc-Switch />];
          break;
        case 'Pageination':
          output = [<doc-Pageination />];
          break;
        case 'BreadCrumb':
          output = [<doc-BreadCrumb />]
          break;
        case 'Nav':
          output = [<doc-Nav />]
          break;
        case 'Menu':
          output = [<doc-Menu />];
          break;
        case 'Tabs':
          output = [<doc-Tabs />];
          break;
        case 'Input':
          output = [<doc-Input />]
          break;
        case 'DatePicker':
          output = [<doc-DatePicker />]
          break;
        case 'CheckBox':
          output = [<doc-CheckBox />];
          break;
        case 'Select':
          output = [<doc-Select />];
          break;
        case 'Cascader':
          output = [<doc-Cascader />]
          break;
        case 'Dialog':
          output = [<doc-Dialog />]
          break;
        case 'Notification':
          output = [<doc-Notification />]
          break;
        case 'Message':
          output = [<doc-Message />]
          break;
        case 'Alert':
          output = [<doc-Alert />]
          break;
        case 'BackTop':
          output = [<doc-BackTop />]
          break;
        case 'Progress':
          output = [<doc-Progress />]
          break;
        case 'Tree':
          output = [<doc-Tree />]
          break;
        case 'Table':
          output = [<doc-Table />]
          break;
        default:
          output = [<doc-Layout></doc-Layout>];
      }
      return (
        <div class="doc">
          <div class="doc-container">
            {output}
          </div>
        </div>
      )
    }
  }
</script>
<style>
  .doc{
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    padding-left: 350px;
  }
  .doc-container{
    width: 100%;
    height: 100%;
    overflow-y: auto;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -o-box-sizing: border-box;
    -ms-box-sizing: border-box;
    box-sizing: border-box;
    padding: 20px;
  }
  .doc-div{
    padding: 20px 20px 100px 30px;
    background: #fff;
  }
  h2{
    font-size: 26px;
    font-weight: normal;
    text-align: left;
  }
  hr{
    height: 1px;
    border: none;
    background-color: #ddd;
  }
  h4{
    color: #444;
    font-size: 20px;
    font-weight: normal;
  }
  pre{
    overflow-x: auto;
    padding: 0;
    margin: 0;
  }
  .doc-icon{
    margin-right: 16px;
    font-size: 16px;
  }
  .doc-indent{
    padding-left: 32px;
  }
  h5{
    color: #444;
    font-size: 16px;
    font-weight: normal;
  }
  .doc-p{
    font-size: 14px;
    text-indent: 2em;
    color: #666;
  }
  .doc-div-clear{
    height: 0px;
    clear: both;
  }
</style>
