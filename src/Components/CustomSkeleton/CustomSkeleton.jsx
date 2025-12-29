import React from 'react'
import { LikeOutlined, Loading3QuartersOutlined, LoadingOutlined, MessageOutlined, StarOutlined } from '@ant-design/icons';
import { Avatar, List, Skeleton, Switch } from 'antd';
const listData = Array.from({ length: 3 }).map((_, i) => ({
  href: 'https://ant.design',
  title: `ant design part ${i + 1}`,
  avatar: `https://api.dicebear.com/7.x/miniavs/svg?seed=${i}`,
  description:
    'Ant Design, a design language for background applications, is refined by Ant UED Team.',
  content:
    'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
}));
const IconText = ({ icon, text }) => (
  <>
    {React.createElement(icon, { style: { marginInlineEnd: 8 } })}
    {text}
  </>
);


const CustomSkeleton = () => {
    return (
        <List
        className='col-span-12'
            itemLayout="vertical"
            size="large"
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={
                        !LoadingOutlined
                            ? [
                                <IconText icon={StarOutlined} text="156" key="list-vertical-star-o" />,
                                <IconText icon={LikeOutlined} text="156" key="list-vertical-like-o" />,
                                <IconText icon={MessageOutlined} text="2" key="list-vertical-message" />,
                            ]
                            : undefined
                    }
                    extra={
                        !Loading3QuartersOutlined && (
                            <img
                                draggable={false}
                                width={272}
                                alt="logo"
                                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                            />
                        )
                    }
                >
                    <Skeleton loading={LoadingOutlined} active avatar>
                        <List.Item.Meta
                            avatar={<Avatar src={item.avatar} />}
                            title={<a href={item.href}>{item.title}</a>}
                            description={item.description}
                        />
                        {item.content}
                    </Skeleton>
                </List.Item>
            )}
        />

    )
}

export default CustomSkeleton