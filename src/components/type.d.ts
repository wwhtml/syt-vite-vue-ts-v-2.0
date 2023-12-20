// 表单每一项的配置选项
interface FormOptions {
  // 表单项显示的元素
  type: "input" | "select" | "option";
  // 表单项的值
  value?: any;
  // 表单项label
  label?: string;
  // 表单项的标识
  prop?: string;
  // 表单项的验证规则
  rules?: RuleItem[];
  // 表单项的占位符
  placeholder?: string;
  // 表单元素特有的属性
  attrs?: {
    // css样式
    style?: CSSProperties;
    clearable?: boolean;
    showPassword?: boolean;
    disabled?: boolean;
  };
  // 表单项的子元素
  children?: FormOptions[];
}
