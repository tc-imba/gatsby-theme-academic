import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import {
  Row, Col, Grid, FlexboxGrid,
} from 'rsuite';

import CodeBox from '../CodeBox';
import PostCard from '../PostCard';
import ResearchCard from '../ResearchCard';
import Tag from '../Tag';
// import PostTag from '../PostTag';
// import Utils from '../../utils/pageUtils';
// import Statistics from '../../../content/statistics.json';

const Panel = (props) => {
  const { type, data } = props;
  const isResearch = type === 'research';

  // console.log(data.allTag);
  const tags = data.allTag ? data.allTag.edges : [];
  const tagsMap = _.mapValues(_.keyBy(tags, (tag) => tag.node.name), 'node');

  // const tags = Utils.getTags(type);
  const [selectedTags, setSelectedTags] = useState(new Set());

  const handleClick = (tagName) => {
    const nextSelectedTags = _.clone(selectedTags);
    if (nextSelectedTags.has(tagName)) {
      nextSelectedTags.delete(tagName);
    } else {
      nextSelectedTags.add(tagName);
    }
    console.log('You are interested in: ', nextSelectedTags);
    setSelectedTags(nextSelectedTags);
  };

  const generateTag = (tag) => {
    const isChecked = selectedTags.has(tag.node.name);
    const color = isChecked ? tag.node.color : '';
    const handleTagClick = () => handleClick(tag.node.name);
    return (
      <Col key={tag.node.name}>
        <Tag color={color}>
          <a onClick={handleTagClick} onKeyPress={handleTagClick} role="button" tabIndex={0}>
            {tag.node.name}
          </a>
        </Tag>
      </Col>
    );
  };

  if (data.allMdx) {
    data.allMdx.edges.forEach((val) => {
      console.log(val.node);
      if (!val.node || !val.node.frontmatter || !val.node.frontmatter.tags) {
        // eslint-disable-next-line no-param-reassign
        val.tags = new Set();
      } else {
        // eslint-disable-next-line no-param-reassign
        val.tags = new Set(val.node.frontmatter.tags);
      }
    });
  }

  return (
    <>
      <FlexboxGrid className="spacing-grid">
        <FlexboxGrid.Item as={Col} xs={24} sm={24} md={24} lg={24}>
          <CodeBox title="Filters">
            <Row gutter={8} align="middle" type="flex">
              <Col>
                <div style={{ marginBottom: '0', marginRight: '10px' }}>
                  Tags:
                </div>
              </Col>
              { tags.map(generateTag)}
            </Row>
          </CodeBox>
        </FlexboxGrid.Item>
        {
          data.allMdx && data.allMdx.edges.map((val, key) => {
            // eslint-disable-next-line no-restricted-syntax
            for (const tag of selectedTags) {
              if (!val.tags.has(tag)) return null;
            }
            if (isResearch) {
              return (
                // eslint-disable-next-line react/no-array-index-key
                <FlexboxGrid.Item as={Col} key={key} xs={24} sm={24} md={24} lg={24}>
                  <ResearchCard data={val} tagsMap={tagsMap} />
                </FlexboxGrid.Item>
              );
            }
            return (
            // eslint-disable-next-line react/no-array-index-key
              <FlexboxGrid.Item as={Col} key={key} xs={24} sm={24} md={24} lg={8}>
                <PostCard data={val} tagsMap={tagsMap} />
              </FlexboxGrid.Item>
            );
          })
        }
      </FlexboxGrid>
    </>
  );
};

Panel.propTypes = {
  type: PropTypes.oneOf(['posts', 'research']).isRequired,
};

export default Panel;
