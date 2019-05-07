import React, { PureComponent } from 'react'
import './style.scss'

import { connect } from 'react-redux';
import { content as selectContent } from '../../redux/staticcontent/selectors';

class ReversedSection extends PureComponent {
	render() {
		const { title, content } = this.props;
		return (
			<div className="BorderedSection">
                <div className="BorderedSection--left">
					<p className="BorderedSection--content">{content}</p>
				</div>
				<div className="BorderedSection--right">
					<h3 className="BorderedSection--title">{title}</h3>
				</div>	
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const { titleKey, contentKey } = ownProps;
	const content = selectContent(state)

	return {
		title: content[titleKey] || ownProps.title,
		content: content[contentKey] || ownProps.content
	}
}

export default connect(mapStateToProps)(ReversedSection)