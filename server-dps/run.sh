#!/usr/bin/env bash
# Forge requires a configured set of both JVM and program arguments.
# Configure Mise Java: temurin-17 per mise.toml
export MISE_JAVA_HOME="$MISE_DATA_PATH/installs/java/temurin-17"
java @user_jvm_args.txt @libraries/net/minecraftforge/forge/1.20.1-47.4.0/unix_args.txt "$@"
