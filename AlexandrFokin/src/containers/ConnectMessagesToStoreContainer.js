// подключение контейнера к store
import { connect } from 'react-redux';

// отправка сообщений
import { mountEvents, sendMessage } from 'actions/messages';
import MessagesContainer from 'containers/MessagesContainer';

/**
 * Устанавливает новые свойства компонента из store
 * @param state содержимое store
 * @param ownProps свойства, изначально переданные в компонент (в т.ч. match, location при использовании Router)
 * @return {{messages: (Array|NamedNodeMap|ActiveX.IXMLDOMNamedNodeMap)}} новые свойства компонента
 */
function mapStateToProps(state, ownProps) {
  return {
    // старые свойства
    ...ownProps,
    // достаем сообщение из store
    messages: state.messages.entities,
  };
}

/**
 * Устанавливает новые свойства компонента из action
 * @param dispatch диспетчер, содержащий сообщение
 * @param ownProps свойства, изначально переданные в компонент (в т.ч. match, location при использовании Router)
 * @return {{mountEvents: (function(): void), sendMessage: Function}}
 */
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // старые свойства
    ...ownProps,
    mountEvents: () => mountEvents(dispatch),
    sendMessage: sendMessage(),
  };
}

/**
 * Подключает контейнер MessagesContainer к store
 * Методы, на которые подписывается компонент:
 * mapStateToProps - устанавливает новые свойства компонента из store
 * mapDispatchToProps - устанавливает новые свойства компонента из action
 * MessagesContainer - подключаемый контейнер
 */
export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);