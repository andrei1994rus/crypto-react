begin
  DELETE FROM kv_store
  WHERE created_at < NOW() - INTERVAL '2 minutes';
end;