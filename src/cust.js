import { ProFormCascader } from "@ant-design/pro-components";

export const RemoteCascade = (props) => {
    const {names = [], joinBy = "-", linkToUrl, ...rest} = props;
    const data = [
        {
            label: "北京",
            value: "北京",
            children: [{label: "朝阳", value: "朝阳"}]
        },
        {
            label: "四川",
            value: "四川",
            children: [{label: "成都", value: "成都"}]
        }
    ];

    const handleTransform = (values) => {
        console.log("handleTransform", values);
        const result = {[props.name]: values};
        names.forEach((name, idx) => {
            result[name] = values[idx];
        });
        return result;
    };
    return (
        <ProFormCascader
            {...rest}
            fieldProps={{
                displayRender: (label) => label.join(joinBy),
                options: data
            }}
            transform={handleTransform}
        />
    );
};

/**
 * fieldProps:{
 *   names:["province","city"],
 *   joinBy:'-',
 *   linkToUrl: 'xxxx' //remote返回candidateValues
 * }
 */
const RemoteCascadeValueType = {
    render: (item, props) => {
        const {fieldProps} = props;
        const {joinBy = "-", names = []} = fieldProps || [];
        const value = names.map((it) => item[it]).join(joinBy);
        return <div>{value}</div>;
    },
    renderFormItem: (__, props) => {
        const {fieldProps} = props;
        return <RemoteCascade {...props} {...fieldProps} />;
    }
};
export default RemoteCascadeValueType;
