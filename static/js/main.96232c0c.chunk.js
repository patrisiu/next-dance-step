(this["webpackJsonpnext-dance-step"]=this["webpackJsonpnext-dance-step"]||[]).push([[0],{74:function(e,t,a){e.exports=a.p+"static/media/wcs.405bbf4e.png"},86:function(e,t,a){e.exports=a(99)},91:function(e,t,a){},92:function(e,t,a){},93:function(e,t,a){},98:function(e,t,a){},99:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(13),i=a.n(r),l=(a(91),a(8)),s=a(9),c=a(7),u=a(11),m=a(10),h=(a(92),a(93),a(133)),p=a(65),d=a.n(p),g=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=function(){n.props.onClick()},n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(h.a,{onClick:this.handleClick,style:{position:"fixed",left:"16px",bottom:"16px"}},o.a.createElement(d.a,null))}}]),a}(o.a.Component),v=a(101),f=a(153),b=a(141),C=a(139),E=a(140),j=a(138),O=a(149),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.onChange(e.target.value)},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(O.a,{autoFocus:!0,margin:"dense",id:"datasource",label:"Google Spreadsheet Link Address",type:"email",fullWidth:!0,onChange:this.handleChange,error:this.props.error})}}]),a}(o.a.Component),y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClose=function(){n.props.onClose()},n.handleApply=function(){n.state.wrongUrl||null===n.googleSheetCode||(localStorage.setItem("googleSheetCode",n.googleSheetCode),window.location.reload())},n.validateGoogleSheetUrl=function(e){if(0===e.search("https://docs.google.com/spreadsheets/d/")){var t=e.split("https://docs.google.com/spreadsheets/d/")[1].split("/");n.validateGoogleSheetCode(t[0])}else n.googleSheetCode=null,n.setState({wrongUrl:!0})},n.validateGoogleSheetCode=function(e){e.length>0?(n.googleSheetCode=e,n.setState({wrongUrl:!1})):(n.googleSheetCode=null,n.setState({wrongUrl:!0}))},n.handleClose=n.handleClose.bind(Object(c.a)(n)),n.validateGoogleSheetUrl=n.validateGoogleSheetUrl.bind(Object(c.a)(n)),n.validateGoogleSheetCode=n.validateGoogleSheetCode.bind(Object(c.a)(n)),n.handleApply=n.handleApply.bind(Object(c.a)(n)),n.googleSheetCode=null,n.state={wrongUrl:!1},n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(f.a,{open:this.props.source,onClose:this.handleClose,"aria-labelledby":"form-dialog-title"},o.a.createElement(j.a,{id:"form-dialog-title"},"Data Source"),o.a.createElement(C.a,null,o.a.createElement(E.a,null,"To load another data source, please enter your Google Spreadsheet URL here. The application will restart to load the new values."),o.a.createElement(S,{onChange:this.validateGoogleSheetUrl,error:this.state.wrongUrl})),o.a.createElement(b.a,null,o.a.createElement(v.a,{onClick:this.handleClose,color:"primary"},"Cancel"),o.a.createElement(v.a,{onClick:this.handleApply,color:"primary"},"Apply")))}}]),a}(o.a.Component),k=a(137),x=a(142),D=a(143),w=a(67),R=a.n(w),T=a(66),L=a.n(T),I=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.onChange(e.target.value)},n.handleIncrease=function(){n.inputRef.current.focus(),n.props.onChange(n.props.value+1)},n.handleDecrease=function(){n.inputRef.current.focus(),n.props.onChange(n.props.value-1)},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.handleIncrease=n.handleIncrease.bind(Object(c.a)(n)),n.handleDecrease=n.handleDecrease.bind(Object(c.a)(n)),n.inputRef=o.a.createRef(),n}return Object(s.a)(a,[{key:"render",value:function(){var e={startAdornment:this.props.startAdornment.startAdornment,endAdornment:o.a.createElement(x.a,{position:"end"},o.a.createElement(D.a,{color:"default","aria-label":"decrease",onClick:this.handleDecrease},o.a.createElement(L.a,null)),o.a.createElement(D.a,{color:"default","aria-label":"increase",onClick:this.handleIncrease},o.a.createElement(R.a,null)))};return o.a.createElement(k.a,null,o.a.createElement(O.a,{label:this.props.label,value:this.props.value,type:"number",InputProps:e,inputProps:{readOnly:!0},onChange:this.handleChange,variant:"outlined",error:this.props.error,inputRef:this.inputRef}))}}]),a}(o.a.Component),M=a(144),A=a(68),N=a.n(A),P=a(69),G=a.n(P),B=a(136),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChangeMinimum=function(e){var t=e,a=n.state.maximum;(t<n.props.range.minimum||""===t)&&(t=n.props.range.minimum),t>n.props.range.maximum&&(t=a),t>a&&(a=t),n.updateLevels(t,a)},n.handleChangeMaximum=function(e){var t=n.state.minimum,a=e;(a>n.props.range.maximum||""===a)&&(a=n.props.range.maximum),a<n.props.range.minimum&&(a=t),a<t&&(t=a),n.updateLevels(t,a)},n.updateLevels=function(e,t){n.state.minimum===e&&n.state.maximum===t||(n.setState({minimum:e,maximum:t}),n.props.onChangeLevels({minimum:e,maximum:t}))},n.handleChangeMaximum=n.handleChangeMaximum.bind(Object(c.a)(n)),n.handleChangeMinimum=n.handleChangeMinimum.bind(Object(c.a)(n)),n.state={minimum:n.props.levels.minimum,maximum:n.props.levels.maximum},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.handleChangeMinimum(this.state.minimum),this.handleChangeMaximum(this.state.maximum)}},{key:"render",value:function(){var e=[{element:o.a.createElement(I,{startAdornment:{startAdornment:o.a.createElement(x.a,{position:"start"},o.a.createElement(N.a,null))},label:"Level Minimum",value:this.state.minimum,onChange:this.handleChangeMinimum}),timeout:600,key:"settings-levels-minium"},{element:o.a.createElement(I,{startAdornment:{startAdornment:o.a.createElement(x.a,{position:"start"},o.a.createElement(G.a,null))},label:"Level Maximum",value:this.state.maximum,onChange:this.handleChangeMaximum}),timeout:900,key:"settings-levels-maximum"}];return o.a.createElement(M.a,{container:!0,direction:"column",spacing:3},e.map((function(e){return o.a.createElement(B.a,{in:!0,timeout:e.timeout,key:e.key},o.a.createElement(M.a,{item:!0},e.element))})))}}]),a}(o.a.Component),q=a(155),W=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.onChange(e.target.value)},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(k.a,null,o.a.createElement(O.a,{label:this.props.label,value:this.props.value,select:!0,InputProps:this.props.inputProps,onChange:this.handleChange,helperText:this.props.helperText,variant:"outlined",fullWidth:!0},this.props.options.map((function(e){return o.a.createElement(q.a,{key:e.value,value:e.value},e.label)}))))}}]),a}(o.a.Component),F=a(70),$=a.n(F),V=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.props.onChangeData(e)},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){var e={startAdornment:o.a.createElement(x.a,{position:"start"},o.a.createElement($.a,null))};return o.a.createElement(k.a,null,o.a.createElement(W,{inputProps:e,label:"Dance Steps",value:this.props.optionSelected,options:this.props.options,onChange:this.handleChange}))}}]),a}(o.a.Component),K=a(71),X=a.n(K),J=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=function(e){n.setState({value:e,error:e<1}),n.props.onChangeTimer(e)},n.minimumAllowed=function(){n.state.value<1&&(n.timerId=setTimeout(n.minimumRestore,800))},n.minimumRestore=function(){clearTimeout(n.timerId),n.handleChange(1)},n.handleChange=n.handleChange.bind(Object(c.a)(n)),n.minimumAllowed=n.minimumAllowed.bind(Object(c.a)(n)),n.minimumRestore=n.minimumRestore.bind(Object(c.a)(n)),n.state={value:n.props.timer,error:n.props.timer<1},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.minimumAllowed()}},{key:"render",value:function(){return o.a.createElement(k.a,null,o.a.createElement(I,{startAdornment:{startAdornment:o.a.createElement(x.a,{position:"start"},o.a.createElement(X.a,null))},label:"Seconds to next Step",value:this.state.value,onChange:this.handleChange,error:this.state.error}))}}]),a}(o.a.Component),z=a(145),H=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).onChangeData=function(e){var t=n.props.data.find((function(t){return t.value===e}));n.props.onChangeSettings({value:e,minimum:t.minimum,maximum:t.maximum,timer:n.props.settings.timer})},n.onChangeLevels=function(e){n.props.onChangeSettings({value:n.props.settings.value,minimum:e.minimum,maximum:e.maximum,timer:n.props.settings.timer})},n.onChangeTimer=function(e){n.props.onChangeSettings({value:n.props.settings.value,minimum:n.props.settings.minimum,maximum:n.props.settings.maximum,timer:e})},n.openSourceDialog=function(){n.setState({source:!0})},n.closeSourceDialog=function(){n.setState({source:!1})},n.onChangeData=n.onChangeData.bind(Object(c.a)(n)),n.onChangeLevels=n.onChangeLevels.bind(Object(c.a)(n)),n.onChangeTimer=n.onChangeTimer.bind(Object(c.a)(n)),n.openSourceDialog=n.openSourceDialog.bind(Object(c.a)(n)),n.closeSourceDialog=n.closeSourceDialog.bind(Object(c.a)(n)),n.options=[],n.range=[],n.props.data.map((function(e){n.options.push({label:e.label,value:e.value}),n.range.push({minimum:e.minimum,maximum:e.maximum})})),n.state={source:!1},n}return Object(s.a)(a,[{key:"render",value:function(){var e=[{element:o.a.createElement(V,{options:this.options,optionSelected:this.props.settings.value,onChangeData:this.onChangeData}),timeout:300,key:"settings-data"},{element:o.a.createElement(U,{levels:{minimum:this.props.settings.minimum,maximum:this.props.settings.maximum},range:this.range[this.props.settings.value],onChangeLevels:this.onChangeLevels}),timeout:600,key:"settings-levels"},{element:o.a.createElement(J,{timer:this.props.settings.timer,onChangeTimer:this.onChangeTimer}),timeout:1200,key:"settings-timer"},{element:o.a.createElement(v.a,{variant:"contained"},"List Steps"),timeout:1500,key:"settings-button-list"}];return o.a.createElement(z.a,{maxWidth:"xs"},o.a.createElement(M.a,{container:!0,direction:"column",justify:"center",alignItems:"stretch",spacing:3},e.map((function(e){return o.a.createElement(B.a,{in:!0,timeout:e.timeout,key:e.key},o.a.createElement(M.a,{item:!0,xs:!0},e.element))}))),o.a.createElement(g,{onClick:this.openSourceDialog}),o.a.createElement(y,{source:this.state.source,onClose:this.closeSourceDialog}))}}]),a}(o.a.Component),Q=a(56),Y=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(Q.a,{variant:"h2",gutterBottom:!0},this.props.name)}}]),a}(o.a.Component),Z=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(Q.a,{variant:"caption",gutterBottom:!0},this.props.level)}}]),a}(o.a.Component),_=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(Q.a,{variant:"inherit",gutterBottom:!0},this.props.description)}}]),a}(o.a.Component),ee=a(147),te=a(146),ae=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).generateNextStep=n.generateNextStep.bind(Object(c.a)(n)),n.setNextDanceStep=n.setNextDanceStep.bind(Object(c.a)(n)),n.startTimer=n.startTimer.bind(Object(c.a)(n)),n.stopTimer=n.stopTimer.bind(Object(c.a)(n)),n.pauseTimer=n.pauseTimer.bind(Object(c.a)(n)),n.count=n.count.bind(Object(c.a)(n)),n.timeResolution=.2,n.dancing=!1,n.state={count:0,stepName:"Let's Dance!",stepDesc:n.props.data.label,stepLevel:""},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.startTimer()}},{key:"componentWillUnmount",value:function(){this.stopTimer()}},{key:"startTimer",value:function(){this.timerId=setInterval(this.count,1e3*this.timeResolution),this.dancing=!0}},{key:"stopTimer",value:function(){clearInterval(this.timerId),this.dancing=!1}},{key:"pauseTimer",value:function(){this.dancing?this.stopTimer():this.startTimer()}},{key:"count",value:function(){var e=this.state.count+this.timeResolution;e>this.props.settings.timer?(this.setState({count:this.props.settings.timer}),this.pauseTimer(),setTimeout(this.setNextDanceStep,800)):this.setState({count:e})}},{key:"generateNextStep",value:function(){var e=Math.floor(1e3*Math.random())%this.props.data.steps.length,t=this.props.data.steps[e].level;return t>this.props.settings.maximum||t<this.props.settings.minimum?this.generateNextStep():this.props.data.steps[e]}},{key:"setNextDanceStep",value:function(){var e=this.generateNextStep();this.setState({count:0,stepName:e.name,stepDesc:e.description,stepLevel:e.level}),this.startTimer()}},{key:"render",value:function(){var e=this.state.count!==this.props.settings.timer,t=Math.round(this.state.count/this.props.settings.timer*100),a=[o.a.createElement(Y,{name:this.state.stepName})];return 0!==this.state.stepDesc.length&&a.push(o.a.createElement(_,{description:this.state.stepDesc})),0!==this.state.stepLevel.length&&a.push(o.a.createElement(Z,{level:this.state.stepLevel})),o.a.createElement(z.a,{maxWidth:"md",ref:this.props.inputRef},o.a.createElement(te.a,{in:e,timeout:800},o.a.createElement(k.a,{elevation:4,onClick:this.pauseTimer},o.a.createElement(M.a,{container:!0,direction:"column",justify:"center",alignItems:"center",spacing:3,style:{padding:"16px"}},a.map((function(e){return o.a.createElement(M.a,{item:!0},e)}))),o.a.createElement(ee.a,{variant:"determinate",value:t}))))}}]),a}(o.a.Component),ne=a(73),oe=a.n(ne),re=a(72),ie=a.n(re),le=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleClick=function(e){n.props.onPlayButton(e.target.value)},n.handleClick=n.handleClick.bind(Object(c.a)(n)),n}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(h.a,{onClick:this.handleClick,style:{position:"fixed",right:"16px",bottom:"16px"}},this.props.play?o.a.createElement(ie.a,null):o.a.createElement(oe.a,null))}}]),a}(o.a.Component),se=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handlePlayButton=function(){var e=!n.state.isRunning;n.setState({isRunning:e}),n.fullScreenMode(e)},n.handleSettings=function(e){n.setState({settings:e})},n.fullScreenMode=function(){!window.document.fullscreenElement&&n.state.isRunning?(console.log(n.inputRef.current),n.inputRef.current.requestFullscreen()):window.document.fullscreenElement&&!n.state.isRunning&&window.document.exitFullscreen()},n.getDance=function(){return o.a.createElement(ae,{settings:n.state.settings,dance:n.state.isRunning,data:{label:n.props.data[n.state.settings.value].label,steps:n.props.data[n.state.settings.value].steps}})},n.getSettings=function(){return o.a.createElement(H,{settings:n.state.settings,data:n.props.data,onChangeSettings:n.handleSettings})},n.handlePlayButton=n.handlePlayButton.bind(Object(c.a)(n)),n.handleSettings=n.handleSettings.bind(Object(c.a)(n)),n.inputRef=o.a.createRef(),n.state={isRunning:!1,settings:{value:n.props.data[0].value,minimum:n.props.data[0].minimum,maximum:n.props.data[0].maximum,timer:10}},n}return Object(s.a)(a,[{key:"componentDidUpdate",value:function(){this.fullScreenMode()}},{key:"render",value:function(){return o.a.createElement(z.a,{ref:this.inputRef,className:"component-main-container"},o.a.createElement(M.a,{container:!0,direction:"column",justify:"center",alignItems:"center",className:"component-main-grid"},o.a.createElement(M.a,{item:!0},this.state.isRunning?this.getDance():this.getSettings())),o.a.createElement(le,{play:this.state.isRunning,onPlayButton:this.handlePlayButton}))}}]),a}(o.a.Component),ce=(a(98),a(151)),ue=a(148),me=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).handleDefault=function(){localStorage.removeItem("googleSheetCode"),e.handleReload()},e.handleReload=function(){window.location.reload()},e}return Object(s.a)(a,[{key:"render",value:function(){return o.a.createElement(z.a,null,o.a.createElement(M.a,{container:!0,direction:"column",justify:"stretch",alignItems:"stretch",spacing:1,wrap:"nowrap"},o.a.createElement(M.a,{item:!0},o.a.createElement(Q.a,{variant:"overline",color:"error"},this.props.message)),o.a.createElement(M.a,{item:!0},o.a.createElement(k.a,{variant:"outlined",square:!0},o.a.createElement(Q.a,{variant:"caption"},"Please make sure that ",o.a.createElement("a",{href:"https://support.google.com/a/users/answer/9308870"},"Publish to the web")," option is enabled for the Google Spreadsheet selected."))),o.a.createElement(M.a,{item:!0},o.a.createElement(k.a,{variant:"outlined",square:!0},o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption"},"The document should list the Dance Steps arranged in three columns:")),o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption"},"- First column contains the Level (numeric).")),o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption"},"- Second column contains the Name.")),o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption"},"- Third column has a short Description (optional).")),o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption"},o.a.createElement("a",{href:"https://docs.google.com/spreadsheets/d/1baypc9DXbtk85KqFqXR0zdbG0d5wKrn8lMskI50iq6E"},"Check here the default example document."))))),o.a.createElement(M.a,{item:!0},o.a.createElement(k.a,{variant:"outlined",square:!0},o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption",display:"block",noWrap:!0},"Current googleSheetCode:")),o.a.createElement(ce.a,null,o.a.createElement(Q.a,{variant:"caption",display:"block",noWrap:!0},this.props.googleSheetCode)))),o.a.createElement(M.a,{item:!0},o.a.createElement(ue.a,{fullWidth:"true"},o.a.createElement(v.a,{onClick:this.handleDefault},"Default"),o.a.createElement(v.a,{onClick:this.handleReload},"Reload")))))}}]),a}(o.a.Component),he=a(74),pe=a.n(he),de=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).googleSheetUrl=function(e,t){return"https://spreadsheets.google.com/feeds/cells/"+e+"/"+t+"/public/full?alt=json"},n.status=function(e){return e.status>=200&&e.status<300?Promise.resolve(e):Promise.reject(new me(e.statusText))},n.json=function(e){return e.json()},n.loadGoogleSheet=function(e,t){fetch(n.googleSheetUrl(e,t)).then(n.status).then(n.json).then(n.parse).catch(n.error)},n.error=function(e){0===n.state.dances.length?(n.setState({error:{status:!0,message:e.toString()}}),console.log("Request failed",e)):n.props.onLoad(n.state.dances)},n.parse=function(e){console.log("Request succeeded with JSON response",e);var t=n.parseSheetCells(e),a=n.parseDanceSteps(t),o=n.state.dances;o.push({label:n.parseDanceLabel(e),value:n.googleSheetPage-1,minimum:a.minimum,maximum:a.maximum,steps:a.steps}),n.setState({dances:o}),n.googleSheetPage=n.googleSheetPage+1,n.loadGoogleSheet(n.googleSheetCode,n.googleSheetPage)},n.getGoogleSheetCode=function(){var e=localStorage.getItem("googleSheetCode");return e=null===e?"1baypc9DXbtk85KqFqXR0zdbG0d5wKrn8lMskI50iq6E":e},n.parseDanceLabel=function(e){return e.feed.title.$t},n.parseSheetCells=function(e){var t=e.feed.entry,a=[];return t.map((function(e){return a.push({row:e.gs$cell.row,col:e.gs$cell.col,inputValue:e.gs$cell.$t})})),a},n.parseDanceSteps=function(e){var t=[],a=99,n=0,o="1",r={level:"",name:"",description:""};return e.map((function(e){switch(o!==e.row&&(t.push(r),r={level:"",name:"",description:""},o=e.row),e.col){case"1":r.level=e.inputValue,a=a>r.level?parseInt(r.level):a,n=n<r.level?parseInt(r.level):n;break;case"2":r.name=e.inputValue;break;case"3":r.description=e.inputValue}})),t.push(r),{minimum:a,maximum:n,steps:t}},n.promptLoading=function(){return o.a.createElement(z.a,null,o.a.createElement(Q.a,{variant:"overline",gutterBottom:!0},"Loading..."),n.state.dances.map((function(e){return o.a.createElement(ce.a,{key:e.value},o.a.createElement(Q.a,{variant:"caption",gutterBottom:!0},e.label))})))},n.promptError=function(){return o.a.createElement(me,{message:n.state.error.message,googleSheetCode:n.googleSheetCode})},n.googleSheetCode=n.getGoogleSheetCode(),n.googleSheetPage=1,n.state={dances:[],error:{hasError:!1,message:""}},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.loadGoogleSheet(this.googleSheetCode,this.googleSheetPage)}},{key:"render",value:function(){return o.a.createElement(z.a,null,o.a.createElement(M.a,{container:!0,direction:"column",justify:"flex-start",alignItems:"stretch",alignContent:"stretch",spacing:2,className:"component-loader-container"},o.a.createElement(M.a,{item:!0,className:"component-loader-center"},o.a.createElement(k.a,{elevation:6},o.a.createElement("img",{src:pe.a,className:"component-loader-logo",alt:"logo"}),o.a.createElement(Q.a,{className:"component-loader-title",variant:"h4"},"Next Dance Step"))),o.a.createElement(M.a,{item:!0},this.state.error.hasError?this.promptError():this.promptLoading())))}}]),a}(o.a.Component),ge=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleLoad=function(e){n.setState({data:e})},n.getMain=function(){return o.a.createElement(se,{data:n.state.data})},n.getLoader=function(){return o.a.createElement(de,{onLoad:n.handleLoad})},n.scrollToBottom=function(){window.document.body.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})},n.handleLoad=n.handleLoad.bind(Object(c.a)(n)),n.scrollToBottom=n.scrollToBottom.bind(Object(c.a)(n)),n.state={data:null},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){this.scrollToBottom()}},{key:"render",value:function(){return o.a.createElement(z.a,{className:"App"},null===this.state.data?this.getLoader():this.getMain())}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(ge,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[86,1,2]]]);
//# sourceMappingURL=main.96232c0c.chunk.js.map