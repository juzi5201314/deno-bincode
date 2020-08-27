use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

pub fn set_console_error_panic_hook() {
    console_error_panic_hook::set_once()
}

#[wasm_bindgen]
pub fn decode(data: Vec<u8>) -> JsValue {
    set_console_error_panic_hook();
    JsValue::from_serde::<serde_json::Value>(&serde_json::from_str(&bincode::deserialize::<String>(&data).unwrap()).unwrap()).unwrap()
}

#[wasm_bindgen]
pub fn encode(v: &JsValue) -> Vec<u8> {
    set_console_error_panic_hook();
    bincode::serialize(&v.into_serde::<serde_json::Value>().unwrap().to_string()).unwrap()
}
