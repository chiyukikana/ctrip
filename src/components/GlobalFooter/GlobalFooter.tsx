import React from 'react'
import { GithubOutlined, BugOutlined } from '@ant-design/icons'
import { DefaultFooter } from '@ant-design/pro-components'
import { Tooltip, Typography } from 'antd'

export const GlobalFooter: React.FC = () => {
  return (
    <DefaultFooter
      copyright="Copyright 1999-2022, ctrip.com. All rights reserved."
      links={[
        {
          key: 'github',
          title: (
            <Tooltip title="支持项目">
              <Typography.Text>
                <GithubOutlined />
                <span>支持项目</span>
              </Typography.Text>
            </Tooltip>
          ),
          href: 'https://github.com/chiyukikana/ctrip',
          blankTarget: true,
        },
        {
          key: 'issues',
          title: (
            <Tooltip title="问题反馈">
              <Typography.Text>
                <BugOutlined />
                <span>问题反馈</span>
              </Typography.Text>
            </Tooltip>
          ),
          href: 'https://github.com/chiyukikana/ctrip/issues',
          blankTarget: true,
        },
      ]}
    />
  )
}
