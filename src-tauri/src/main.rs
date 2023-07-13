#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use tauri::{App, AppHandle, GlobalShortcutManager, Manager};

const OPEN_APP_SHORTCUT: &str = "Shift+Ctrl+a";
const WINDOW: &str = "launcher";

#[tauri::command]
fn toggle_window(window: tauri::Window) {
    toggle_launchbar(&window.app_handle(), true);
}

fn toggle_launchbar(app: &AppHandle, only_open: bool) {
    let window = app.get_window(WINDOW).expect("Did you label your window?");
    if let Ok(true) = window.is_visible() {
        if !only_open {
            let _ = window.hide();
        }
    } else {
        let _ = window.show();
    }
}

fn register_shortcut(app: &mut App) -> Result<(), tauri::Error> {
    let app_handle = app.app_handle();
    let mut shortcuts = app_handle.global_shortcut_manager();
    if !shortcuts.is_registered(OPEN_APP_SHORTCUT)? {
        shortcuts.register(OPEN_APP_SHORTCUT, move || toggle_launchbar(&app_handle, false))?;
    }
    Ok(())
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_positioner::init())
        .on_system_tray_event(|app, event| {
                   tauri_plugin_positioner::on_tray_event(app, &event);
                })
        .invoke_handler(tauri::generate_handler![toggle_window])
        .setup(move |app: &mut App| {
            if let Err(err) = register_shortcut(app) {
                eprintln!("Unable to register shortcut: {err}");
            }
            Ok(())
        })
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
