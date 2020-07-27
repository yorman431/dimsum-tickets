import React, { useCallback } from 'react';
import DSButton from '@elliemae/ds-basic/Button';
import Comments from '@elliemae/ds-icons/Comments';
import PropTypes from 'prop-types';
import { get } from 'lodash';

export const CommentsCellHeader = () => <Comments />;

const CommentsCell = ({
  customHandlers: { onCommentsClick = () => {} },
  metaData: { rowData },
  entityType = 'workflow-rule',
  countField = 'totalComments',
}) => {
  const { id } = rowData;
  const totalComments = get(rowData, countField, '0');
  const dataProps = {
    'data-testid': `${entityType}-${countField}-toggle`,
    [`data-${entityType}Id`]: id,
    containerProps: {
      'data-testid': `${entityType}-${countField}-toggle-container`,
    },
  };
  const onClick = useCallback(
    (event) => {
      event.stopPropagation();
      onCommentsClick(rowData);
    },
    [onCommentsClick, rowData],
  );
  return (
    <DSButton
      {...dataProps}
      color={(props) => props.theme.colors.brand['500']}
      buttonType="text"
      labelText={totalComments}
      onClick={onClick}
      disabled={totalComments === '0'}
    />
  );
};
CommentsCell.propTypes = {
  customHandlers: PropTypes.shape({
    onCommentsClick: PropTypes.func,
  }),
  metaData: PropTypes.shape({
    rowData: PropTypes.object,
  }),
  entityType: PropTypes.string.isRequired,
  countField: PropTypes.string,
  theme: PropTypes.object,
};

export default CommentsCell;
