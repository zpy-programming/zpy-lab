const reservedWords = {
    regexp: '`/(?<=\\\\s)${key}(?=[\\\\s:])/gm`',
    safariReg: '`/${key}(?=[\\\\s:])/gm`',
    words: {
        '函数': 'def',
        '删除': 'del',
        '跳过': 'pass',
        '终止': 'break',
        '继续': 'continue',
        '返回': 'return',
        '从': 'from',
        '抛出': 'raise',
        '生成': 'yield',
        '导入': 'import',
        '全局': 'global',
        '非局部': 'nonlocal',
        '断言': 'assert',
        '如果': 'if',
        '或如': 'elif',
        '否则': 'else',
        '当': 'while',
        '对于': 'for',
        '尝试': 'try',
        '捕获': 'except',
        '最后': 'finally',
        '作为': 'as',
        '随着': 'with',
        '匿名': 'lambda',
        '或': 'or',
        '与': 'and',
        '不': 'not',
        '在': 'in',
        '空': 'None',
        '对': 'True',
        '错': 'False',
        '自己': 'self',
        '类': 'class',
        '异步': 'async',
        '等待': 'await',
        '是': 'is',
    }
}

const functionWords = {
    regexp: '`/(?<=[^\u4e00-\u9fa5\\\\w])${key}(?=\\\\(.*\\\\))/gm`',
    safariReg: '`/${key}(?=\\\\(.*\\\\))/gm`',
    words: {
        '符': 'chr',
        '二进制': 'bin',
        '串': 'str',
        '八进制': 'oct',
        '符值': 'ord',
        '十六进制': 'hex',
        '元组': 'tuple',
        '长': 'len',
        '集合': 'set',
        '全为真': 'all',
        '字典': 'dict',
        '任一为真': 'any',
        '列表': 'list',
        '迭代': 'iter',
        '冻结集合': 'frozenset',
        '超类': 'super',
        '切片': 'slice',
        '乘方': 'pow',
        '字节': 'bytes',
        '排序': 'sort',
        '已排序': 'sorted',
        '全局字典': 'globals',
        '字节数组': 'bytearray',
        '局部字典': 'locals',
        '属性': 'property',
        '对象': 'object',
        '删属性': 'delattr',
        '变量字典': 'vars',
        '取属性': 'getattr',
        '可调用': 'callable',
        '有属性': 'hasattr',
        '内存视图': 'memoryview',
        '设属性': 'setattr',
        '哈希': 'hash',
        '复数': 'complex',
        '商余': 'divmod',
        '整数': 'int',
        '评估': 'eval',
        '浮点数': 'float',
        '长整数': 'long',
        '范围': 'range',
        '布尔': 'bool',
        '表示': 'repr',
        '输入': 'input',
        '打包': 'zip',
        '打印': 'print',
        '打开': 'open',
        '执行': 'exec',
        '编译': 'compile',
        '反转': 'reversed',
        '映射': 'map',
        '和': 'sum',
        '是实例': 'isinstance',
        '枚举': 'enumerate',
        '最大值': 'max',
        '断点': 'breakpoint',
        '最小值': 'min',
        '是子类': 'issubclass',
        '绝对值': 'abs',
        '下一个': 'next',
        '类型': 'type',
        '筛选': 'filter',
        '格式化': 'format',
        '静态方法': 'staticmethod',
        '舍入': 'round',
        '类方法': 'classmethod',
        '退出': 'exit',
        '帮助': 'help',
        '应用': 'apply',
        '基字符串': 'basestring',
        '缓存': 'buffer',
        '比较': 'cmp',
        '强制': 'coerce',
        '执行文件': 'execfile',
        '文件': 'file',
        '简化': 'reduce',
        '重载': 'reload',
        'repr': 'repr',
        'intern': 'intern',
        'unicode': 'unicode',
        'ascii': 'ascii',
        'id': 'id',
        'dir': 'dir',
        '__字典__': '__dict__',
        '__方法__': '__methods__',
        '__成员__': '__members__',
        '__对象__': '__class__',
        '__基类__': '__bases__',
        '__名字__': '__name__',
        '__继承__': '__mro__',
        '__子类__': '__subclasses__',
        '__初始化__': '__init__',
        '__导入__': '__import__',
        '__主函数__': '__main__',
    }
}

const library = {
    regexp: '`/(?<=[^\u4e00-\u9fa5\\\\w])${key}(?=[^\u4e00-\u9fa5\\\\w])/gm`',
    safariReg: '`/${key}(?=[^\u4e00-\u9fa5\\\\w])/gm`',
    words: {
        '时间': 'time',
        '随机': 'random',
        '性能计数器': 'perf_counter',
        '随机数': 'randint',
        '拷贝': 'copy',
        '深拷贝': 'deepcopy',
    }
}

const keywords = [reservedWords, functionWords, library]

export {keywords}

// 'and',
// 'as',
// 'assert',
// 'break',
// 'class',
// 'continue',
// 'def',
// 'del',
// 'elif',
// 'else',
// 'except',
// 'exec',
// 'finally',
// 'for',
// 'from',
// 'global',
// 'if',
// 'import',
// 'in',
// 'is',
// 'lambda',
// 'None',
// 'not',
// 'or',
// 'pass',
// 'print',
// 'raise',
// 'return',
// 'self',
// 'try',
// 'while',
// 'with',
// 'yield',
//
// 'int',
// 'float',
// 'long',
// 'complex',
// 'hex',
//
// 'abs',
// 'all',
// 'any',
// 'apply',
// 'basestring',
// 'bin',
// 'bool',
// 'buffer',
// 'bytearray',
// 'callable',
// 'chr',
// 'classmethod',
// 'cmp',
// 'coerce',
// 'compile',
// 'complex',
// 'delattr',
// 'dict',
// 'dir',
// 'divmod',
// 'enumerate',
// 'eval',
// 'execfile',
// 'file',
// 'filter',
// 'format',
// 'frozenset',
// 'getattr',
// 'globals',
// 'hasattr',
// 'hash',
// 'help',
// 'id',
// 'input',
// 'intern',
// 'isinstance',
// 'issubclass',
// 'iter',
// 'len',
// 'locals',
// 'list',
// 'map',
// 'max',
// 'memoryview',
// 'min',
// 'next',
// 'object',
// 'oct',
// 'open',
// 'ord',
// 'pow',
// 'print',
// 'property',
// 'reversed',
// 'range',
// 'raw_input',
// 'reduce',
// 'reload',
// 'repr',
// 'reversed',
// 'round',
// 'set',
// 'setattr',
// 'slice',
// 'sorted',
// 'staticmethod',
// 'str',
// 'sum',
// 'super',
// 'tuple',
// 'type',
// 'unichr',
// 'unicode',
// 'vars',
// 'xrange',
// 'zip',
//
// 'True',
// 'False',
//
// '__dict__',
// '__methods__',
// '__members__',
// '__class__',
// '__bases__',
// '__name__',
// '__mro__',
// '__subclasses__',
// '__init__',
// '__import__'
