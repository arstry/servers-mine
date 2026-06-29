local default = require("tacz_default_state_machine")
local GUN_KICK_TRACK_LINE = GUN_KICK_TRACK_LINE

local gun_kick_state = setmetatable({
    is_preheat = false,
    preheat_time = 0,
}, {__index = default.gun_kick_state})

local function get_preheat_animation_time(context)
    local preheat_animation_duration = context:getStateMachineParams().preheat_animation_time
    if (preheat_animation_duration) then
        preheat_animation_duration = preheat_animation_duration * 1000
    else
        preheat_animation_duration = 0
    end
    return preheat_animation_duration
end

function gun_kick_state.transition(this, context, input)
   local preheat_animation_duration=get_preheat_animation_time(context)
    if (input == INPUT_SHOOT) then
        if (gun_kick_state.preheat_time < preheat_animation_duration) then
            gun_kick_state.preheat_time = gun_kick_state.preheat_time + 100
            if (gun_kick_state.is_preheat == false) then
                local track = context:findIdleTrack(GUN_KICK_TRACK_LINE, false)
                context:runAnimation("preheat", track, true, PLAY_ONCE_STOP, 0)
                gun_kick_state.is_preheat = true
            end
        else
        local track = context:findIdleTrack(GUN_KICK_TRACK_LINE, false)
        context:runAnimation("shoot", track, true, PLAY_ONCE_STOP, 0) -- 这里是混合动画，一般是可叠加的 gun kick
        -- 获取上次射击的 timestamp（系统时间，单位毫秒）
        local last_shoot_timestamp = context:getLastShootTimestamp()
        -- 获取当前系统时间
        local current_timestamp = context:getCurrentTimestamp()
        -- 获取枪械的射击间隔，单位毫秒。用于判断是否在连射，也用于调整射击间隔
        local shoot_interval = context:getShootInterval()
        -- 判断是否在连射，给 2 tick 宽容时间
        if (current_timestamp - last_shoot_timestamp > shoot_interval + 500) then
            gun_kick_state.preheat_time = 0
            gun_kick_state.is_preheat = false
            end
        end
    end
    return nil
end

local M = setmetatable({
    gun_kick_state = gun_kick_state
}, {__index = default})

function M:initialize(context)
    default.initialize(self, context)
    gun_kick_state.preheat_time = 0
    gun_kick_state.is_preheat = false
end

return M