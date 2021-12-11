/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { languages } from 'monaco-editor-core';

export const configuration: languages.LanguageConfiguration = {
    comments: {
        lineComment: '#',
        blockComment: ["'''", "'''"]
    },
    brackets: [
        ['{', '}'],
        ['[', ']'],
        ['(', ')']
    ],
    autoClosingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"', notIn: ['string'] },
        { open: "'", close: "'", notIn: ['string', 'comment'] }
    ],
    surroundingPairs: [
        { open: '{', close: '}' },
        { open: '[', close: ']' },
        { open: '(', close: ')' },
        { open: '"', close: '"' },
        { open: "'", close: "'" }
    ],
    onEnterRules: [
        {
            beforeText: new RegExp(
                '^\\s*(?:def|class|for|if|elif|else|while|try|with|finally|except|async).*?:\\s*$'
            ),
            action: { indentAction: languages.IndentAction.Indent }
        }
    ],
    folding: {
        offSide: true,
        markers: {
            start: new RegExp('^\\s*#region\\b'),
            end: new RegExp('^\\s*#endregion\\b')
        }
    }
};

export const languageDef = <languages.IMonarchLanguage>{
    defaultToken: '',
    tokenPostfix: '.zpy',

    keywords: [
        // This section is the result of running
        // `for k in keyword.kwlist: print('  "' + k + '",')` in a Python REPL,
        // though note that the output from Python 3 is not a strict superset of the
        // output from Python 2.
        'False', // promoted to keyword.kwlist in Python 3
        'None', // promoted to keyword.kwlist in Python 3
        'True', // promoted to keyword.kwlist in Python 3
        'and',
        'as',
        'assert',
        'async', // new in Python 3
        'await', // new in Python 3
        'break',
        'class',
        'continue',
        'def',
        'del',
        'elif',
        'else',
        'except',
        'exec', // Python 2, but not 3.
        'finally',
        'for',
        'from',
        'global',
        'if',
        'import',
        'in',
        'is',
        'lambda',
        'nonlocal', // new in Python 3
        'not',
        'or',
        'pass',
        'print', // Python 2, but not 3.
        'raise',
        'return',
        'try',
        'while',
        'with',
        'yield',

        'int',
        'float',
        'long',
        'complex',
        'hex',

        'abs',
        'all',
        'any',
        'apply',
        'basestring',
        'bin',
        'bool',
        'buffer',
        'bytearray',
        'callable',
        'chr',
        'classmethod',
        'cmp',
        'coerce',
        'compile',
        'complex',
        'delattr',
        'dict',
        'dir',
        'divmod',
        'enumerate',
        'eval',
        'execfile',
        'file',
        'filter',
        'format',
        'frozenset',
        'getattr',
        'globals',
        'hasattr',
        'hash',
        'help',
        'id',
        'input',
        'intern',
        'isinstance',
        'issubclass',
        'iter',
        'len',
        'locals',
        'list',
        'map',
        'max',
        'memoryview',
        'min',
        'next',
        'object',
        'oct',
        'open',
        'ord',
        'pow',
        'print',
        'property',
        'reversed',
        'range',
        'raw_input',
        'reduce',
        'reload',
        'repr',
        'reversed',
        'round',
        'self',
        'set',
        'setattr',
        'slice',
        'sorted',
        'staticmethod',
        'str',
        'sum',
        'super',
        'tuple',
        'type',
        'unichr',
        'unicode',
        'vars',
        'xrange',
        'zip',
        '__dict__',
        '__methods__',
        '__members__',
        '__class__',
        '__bases__',
        '__name__',
        '__mro__',
        '__subclasses__',
        '__init__',
        '__import__',
        '函数',
        '删除',
        '跳过',
        '终止',
        '继续',
        '返回',
        '从',
        '抛出',
        '生成',
        '导入',
        '全局',
        '非局部',
        '断言',
        '如果',
        '或如',
        '否则',
        '当',
        '对于',
        '尝试',
        '捕获',
        '最后',
        '作为',
        '随着',
        '匿名',
        '或',
        '与',
        '不',
        '在',
        '空',
        '对',
        '错',
        '自己',
        '类',
        '异步',
        '等待',
        '是',
        '符',
        '二进制',
        '串',
        '八进制',
        '符值',
        '十六进制',
        '元组',
        '长',
        '集合',
        '全为真',
        '字典',
        '任一为真',
        '列表',
        '迭代',
        '冻结集合',
        '超类',
        '切片',
        '乘方',
        '字节',
        '排序',
        '已排序',
        '全局字典',
        '字节数组',
        '局部字典',
        '属性',
        '对象',
        '删属性',
        '变量字典',
        '取属性',
        '可调用',
        '有属性',
        '内存视图',
        '设属性',
        '哈希',
        '复数',
        '商余',
        '整数',
        '评估',
        '浮点数',
        '长整数',
        '范围',
        '布尔',
        '表示',
        '输入',
        '打包',
        '打印',
        '打开',
        '执行',
        '编译',
        '反转',
        '映射',
        '和',
        '是实例',
        '枚举',
        '最大值',
        '断点',
        '最小值',
        '是子类',
        '绝对值',
        '下一个',
        '类型',
        '筛选',
        '格式化',
        '静态方法',
        '舍入',
        '类方法',
        '退出',
        '帮助',
        '应用',
        '基字符串',
        '缓存',
        '比较',
        '强制',
        '执行文件',
        '文件',
        '简化',
        '重载',
        'repr',
        'intern',
        'unicode',
        'ascii',
        'id',
        'dir',
        '__字典__',
        '__方法__',
        '__成员__',
        '__对象__',
        '__基类__',
        '__名字__',
        '__继承__',
        '__子类__',
        '__初始化__',
        '__导入__'
    ],

    brackets: [
        { open: '{', close: '}', token: 'delimiter.curly' },
        { open: '[', close: ']', token: 'delimiter.bracket' },
        { open: '(', close: ')', token: 'delimiter.parenthesis' }
    ],

    tokenizer: {
        root: [
            { include: '@whitespace' },
            { include: '@numbers' },
            { include: '@strings' },

            [/[,:;]/, 'delimiter'],
            [/[{}\[\]()]/, '@brackets'],

            [/@[a-zA-Z_\u4e00-\u9fa5]+/gm, 'tag'],
            [
                /[a-zA-Z_\u4e00-\u9fa5]+/gm,
                {
                    cases: {
                        '@keywords': 'keyword',
                        '@default': 'identifier'
                    }
                }
            ]
        ],

        // Deal with white space, including single and multi-line comments
        whitespace: [
            [/\s+/, 'white'],
            [/(^#.*$)/, 'comment'],
            [/'''/, 'string', '@endDocString'],
            [/"""/, 'string', '@endDblDocString']
        ],
        endDocString: [
            [/[^']+/, 'string'],
            [/\\'/, 'string'],
            [/'''/, 'string', '@popall'],
            [/'/, 'string']
        ],
        endDblDocString: [
            [/[^"]+/, 'string'],
            [/\\"/, 'string'],
            [/"""/, 'string', '@popall'],
            [/"/, 'string']
        ],

        // Recognize hex, negatives, decimals, imaginaries, longs, and scientific notation
        numbers: [
            [/-?0x([abcdef]|[ABCDEF]|\d)+[lL]?/, 'number.hex'],
            [/-?(\d*\.)?\d+([eE][+\-]?\d+)?[jJ]?[lL]?/, 'number']
        ],

        // Recognize strings, including those broken across lines with \ (but not without)
        strings: [
            [/'$/, 'string.escape', '@popall'],
            [/'/, 'string.escape', '@stringBody'],
            [/"$/, 'string.escape', '@popall'],
            [/"/, 'string.escape', '@dblStringBody']
        ],
        stringBody: [
            [/[^\\']+$/, 'string', '@popall'],
            [/[^\\']+/, 'string'],
            [/\\./, 'string'],
            [/'/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ],
        dblStringBody: [
            [/[^\\"]+$/, 'string', '@popall'],
            [/[^\\"]+/, 'string'],
            [/\\./, 'string'],
            [/"/, 'string.escape', '@popall'],
            [/\\$/, 'string']
        ]
    }
};