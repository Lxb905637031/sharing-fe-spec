(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{319:function(t,s,a){"use strict";a.r(s);var n=a(14),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"commitlint-config-sharing"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#commitlint-config-sharing"}},[t._v("#")]),t._v(" commitlint-config-sharing")]),t._v(" "),s("blockquote",[s("p",[t._v("GIT规范")])]),t._v(" "),s("p",[t._v("支持配套的 [commitlint 配置] (https://commitlint.js.org/#/concepts-shareable-config),用于对"),s("code",[t._v("git commit message")]),t._v("进行校验")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("使用时，需要安装 "),s("a",{attrs:{href:"https://www.npmjs.com/package/@commitlint/cli",target:"_blank",rel:"noopener noreferrer"}},[t._v("@commitlint/cli"),s("OutboundLink")],1),t._v(":")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" commitlint-config-sharing @commitlint/cli --save-dev\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("p",[t._v("在"),s("code",[t._v("commitlint.config.js")]),t._v("中集成本包:")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[t._v("module"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("extends")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'commitlint-config-sharing'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"设置-git-hook"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置-git-hook"}},[t._v("#")]),t._v(" 设置 git hook")]),t._v(" "),s("p",[t._v("可通过 "),s("a",{attrs:{href:"https://www.mpmjs.com/package/husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("husky"),s("OutboundLink")],1),t._v("设置在"),s("code",[t._v("git commit")]),t._v("时触发"),s("code",[t._v("commitlint")]),t._v(".")]),t._v(" "),s("p",[t._v("首先安装 husky:")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" husky --save-dev\n")])])]),s("p",[t._v("然后执行添加"),s("code",[t._v("commit-msg")]),t._v(":")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("npx husky add .husky/commit-msg `npx commitlint --edit $1`\n")])])]),s("p",[t._v("更多信息可参考 "),s("a",{attrs:{href:"https://commitlint.js.org/#/guides-local-setup?id=install-husky",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitlint 文档"),s("OutboundLink")],1),t._v("。")])])}),[],!1,null,null,null);s.default=e.exports}}]);