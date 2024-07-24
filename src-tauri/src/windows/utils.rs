fn is_game(app_key: &RegKey) -> io::Result<bool> {
    // Пример логики определения, является ли приложение игрой.
    // Здесь можно добавить свои критерии, например, поиск по строкам Publisher, DisplayName и т.д.
    if let Ok(publisher): Result<String, _> = app_key.get_value("Publisher") {
        if publisher.to_lowercase().contains("game") || publisher.to_lowercase().contains("игра") {
            return Ok(true);
        }
    }

    if let Ok(display_name): Result<String, _> = app_key.get_value("DisplayName") {
        if display_name.to_lowercase().contains("game") || display_name.to_lowercase().contains("игра") {
            return Ok(true);
        }
    }

    Ok(false)
}