import React, { useContext } from "react";
import "antd/dist/antd.css";
import RemoteCascadeValueType, { RemoteCascade } from "./cust";
import { BetaSchemaForm, ProForm, ProProvider } from "@ant-design/pro-components";
import { message } from "antd";

const EleProvider = (props) => {
    const context = useContext(ProProvider);
    return (
        <ProProvider.Provider
            value={{
                ...context,
                valueTypeMap: {
                    RemoteCascade: RemoteCascadeValueType
                }
            }}
        >
            {props.children}
        </ProProvider.Provider>
    );
};

export default function App() {
    return (
        <EleProvider>
            <ProForm
                onFinish={async (values) => {
                    message.success("提交成功" + JSON.stringify(values));
                }}
            >
                <BetaSchemaForm
                    layoutType="Embed"
                    columns={[
                        {
                            title: "schema测试-所在城市",
                            valueType: "RemoteCascade",
                            dataIndex: "test1",
                            fieldProps: {
                                width: "md",
                                names: ["test1Province", "test1City"],
                                linkToUrl: "/api/test/cities",
                                placeholder: "请选择，这里有bug"
                            }
                        }
                    ]}
                />

                <RemoteCascade
                    linkToUrl={"/api/test/cities"}
                    width="md"
                    name="test2"
                    label= "component测试-所在城市"
                    names={["test2Province", "test2City"]}
                    placeholder="请选择所在城市"
                />
            </ProForm>
        </EleProvider>
    );
}
