const messagesList = {
  'auth/user-not-found': 'Пользователь не найден! Проверьте логин и пароль.',
  'auth/invalid-email': 'Введите корректный email!',
  'auth/weak-password': 'Пароль должен быть не менее 6 символов!',
  'empty-name-field': 'Имя не может быть пустым!',
  'messages/load-error': 'Ошибка загрузки сообщений!',
  'topics/wrong-url-format': 'Вы ввели некорректный url топика vk!',
  'topics/topic-exists': 'Топик vk с таким url уже отслеживается!',
  'topics/topic-removed': 'Топик был успешно удален!',
  'topics/group-removed': 'Группа была успешно удалена!',
  'settings/update-success': 'Настройки успешно сохранены!'
}

export default function getMessage(code) {
  return messagesList[code] || 'Неизвестная ошибка!'
}
