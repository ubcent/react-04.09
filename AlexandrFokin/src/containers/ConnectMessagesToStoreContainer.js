// подключение контейнера к store
import { connect } from 'react-redux';

// отправка сообщений
import { mountEvents, sendMessage } from 'actions/messages';
import MessagesContainer from 'containers/MessagesContainer';

/**
 * Добавляет из state новые свойства присоединенному компоненту и подписывает на изменение
 * этих свойств в state
 * @param state содержимое state
 * @param ownProps свойства, изначально переданные в компонент (в т.ч. match, location
 *        при использовании Router)
 * @return {{messages: (Array|NamedNodeMap|ActiveX.IXMLDOMNamedNodeMap)}} новые свойства
 *        компонента
 */
function mapStateToProps(state, ownProps) {
  return {
    // текущие свойства
    ...ownProps,
    // с помощью редьюсера messages достаем из переменной messages, хранящейся в store,
    // массив сообщений entities, передаем их в свойства присоединенного компонента и
    // подписываемся на изменение этих данных
    messages: state.messages.entities,
  };
}

/**
 * Добавляет из action новые свойства присоединенному компоненту
 * @param dispatch {function} диспетчер, содержащий сообщение
 * @param ownProps свойства, изначально переданные в компонент (в т.ч. match, location при
 *        использовании Router)
 * @return {{mountEvents: (function(): void), sendMessage: Function}}
 */
function mapDispatchToProps(dispatch, ownProps) {
  return {
    // текущие свойства
    ...ownProps,
    // получаем функции из экшена messages и передаем их в свойства присоединенного компонента
    mountEvents: () => dispatch(mountEvents()),
    sendMessage: message => dispatch(sendMessage(message)),
  };
}

/**
 * Подключает контейнер MessagesContainer к store
 * Методы, на которые подписывается компонент:
 * mapStateToProps - добавляет из store новые свойства компоненту
 * mapDispatchToProps - добавляет из action новые свойства компоненту
 * MessagesContainer - подключаемый контейнер
 * @return новый присоединенный компонент (контейнер), который оборачивает переданный
 * компонент (контейнер) <Connect(MessagesContainer)/>
 */
export default connect(mapStateToProps, mapDispatchToProps)(MessagesContainer);