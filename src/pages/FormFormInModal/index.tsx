import styles from "./index.less";
import React, {useState} from "react";
import {Button, Modal, Form, Input, message} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import {ProFormUploadButton, ProFormSelect} from "@ant-design/pro-components";
import {createPost} from "@/services/ant-design-pro/api";
import {useModel} from "@@/plugin-model/useModel";


interface Values {
  title?: string;
  postContext?: string;
  postImage?: string;
  postType?: string;
}

interface CollectionCreateFormProps {
  visible: boolean;
  onCreate: (values: Values) => void;
  onCancel: () => void;
}

const CollectionCreateForm: React.FC<CollectionCreateFormProps> = ({
                                                                     visible,
                                                                     onCreate,
                                                                     onCancel,
                                                                   }) => {
  const [form] = Form.useForm();
  const {TextArea} = Input;

  return (
    <Modal
      visible={visible}
      title="说点什么"
      okText="发布"
      cancelText="取消"
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then((values) => {
            form.resetFields();
            onCreate(values);
          })
          .catch((info) => {
            console.log("Validate Failed:", info);
          });
      }}
    >
      <Form
        form={form}
        layout="vertical"
        name="form_in_modal"
        initialValues={{modifier: "public"}}
      >
        <Form.Item
          name="title"
          label="标题"
          rules={[
            {
              required: true,
              message: "请填写标题！",
            },
          ]}
        >
          <Input/>
        </Form.Item>
        <Form.Item name="postContext" label="内容"
                   rules={[
                     {
                       required: true,
                       message: "请填写内容！",
                     },
                   ]}>
          <TextArea autoSize={{minRows: 4}}/>
        </Form.Item>
        <ProFormUploadButton
          name="postImage"
          label="上传图片"
          max={1}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="/upload.do"
        />
        <ProFormSelect.SearchSelect
          name="postType"
          label="标签"
          fieldProps={{
            style: {
              minWidth: 140,
            },
          }}
          valueEnum={{
            '#自我介绍#': {text: '自我介绍', status: '#自我介绍#'},
            '#学习经验#': {
              text: '学习经验',
              status: '#学习经验#',
            },
            '#失物招领#': {
              text: '失物招领',
              status: '#失物招领#',
            },
            '#校园美食#': {
              text: '校园美食',
              status: '#校园美食#',
            },
            '#考研#': {
              text: '考研',
              status: '#考研#',
            },
            '#求职#': {
              text: '求职',
              status: '#求职#',
            },
          }}
        />
      </Form>
    </Modal>
  );
};

const CollectionsPage = () => {
  const {initialState} = useModel('@@initialState');
  const [visible, setVisible] = useState(false);
  const onCreate = async (values: any) => {
    const {title, postContext, postImage, postType} = values;
    console.log("Received values of form: ", values);
    const {currentUser} = initialState;
    const data = {
      userAccount: currentUser.userAccount,
      username: currentUser.username,
      avatarUrl: currentUser.avatarUrl,
      title: title,
      postContext: postContext,
      postImage: "",
      postType: "",
    };
    data.postImage = postImage[0].uid;
    data.postType = postType[0].value;
    console.log(data);
    try {
      //提交表单
      const postId = await createPost(data);
      if (postId) {
        const defaultLoginSuccessMessage = '发布成功！';
        message.success(defaultLoginSuccessMessage);
        return;
      } else {

      }
    } catch (error) {
      const defaultLoginFailureMessage = '发布失败，请重试！';
      message.error(defaultLoginFailureMessage);
    }
    setVisible(false);
  };
  return (
    <div>
      <Button
        type="default"
        onClick={() => {
          setVisible(true);
        }}
      >
        <PlusOutlined/>
        发表主题
      </Button>
      <CollectionCreateForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false);
        }}
      />
    </div>
  );
};

export default () => (
  <div className={styles.container}>
    <div id="components-form-demo-form-in-modal">
      <CollectionsPage/>
    </div>
  </div>
);
