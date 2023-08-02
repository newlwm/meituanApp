module.exports = {
   // 注意，plugins 里别忘了加 vue 选项
  //  plugins: [
  //   'html',
  //   'vue'	
  // ],
    root: true,
    env: {
      node: true
    },
    extends: [
      'plugin:vue/essential',
      'eslint:recommended'
    ],
    // extends: ['plugin:vue/vue3-recommended',],

    parserOptions: {
      parser: '@babel/eslint-parser'
    },
    rules: {
      'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
      'vue/multi-word-component-names':"off",  //解决eslint命名规则报错
      "no-unused-vars": 0,  // 定义的变量未使用报错的配置
      'vue/no-v-model-argument': 'off',    // 配置v-model 报错
      "vue/no-multiple-template-root":'off',  // 关闭template模板报错
      "semi": ["error", "always"],
      "quotes": [0, "single"],	// 禁用引号检查	引号类型 `` "" ''
      "semi": 0,  				// 禁用分号检查	[1, "always"]: 需要分号, [2, "never"]: 不加分号, 0: 禁用此项
    },
    overrides: [
          //这里是添加的代码
          { 
            files: ['src/View/index.vue','src/View/**/index.vue'],   // 匹配views和二级目录中的index.vue
            rules: {} //给上面匹配的文件指定规则
          },
      {
        files: [
          '**/__tests__/*.{j,t}s?(x)',
          '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
          jest: true
        }
      }
    ]
  }